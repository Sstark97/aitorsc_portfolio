import { useEffect } from "react";
import { useGlobalContext } from "@containers/AppProvider";
import SkillsPresentation from "@components/SkillsPresentation";
import SkillBar from "@components/SkillBar";
import ExperienceCard from "@components/ExperienceCard";
import LoadingSpinner from "@components/LoadingSpinner";
import DataList from "@components/DataList";
import "@styles/containers/skills.scss";

const SkillsContainer = () => {
  const { skillData, experienceData, loadData } = useGlobalContext();

  useEffect(() => {
    ["skills", "work"].forEach(endPoint => loadData(endPoint));

  } , [skillData, experienceData]);

  return (
    <section className="skills_container">
      {skillData.length !== 0 ||
      experienceData.length !== 0 ? (
        <>
          <SkillsPresentation />
          <article className="skills_data_container">
            <DataList
              MyComponent={SkillBar}
              props={["name", "level"]}
              endPoint="skills"
              column
            />
            <DataList
              MyComponent={ExperienceCard}
              props={[
                "position",
                "company",
                "description",
                "start_date",
                "final_date",
                "current",
              ]}
              endPoint="work"
            />
          </article>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default SkillsContainer;
