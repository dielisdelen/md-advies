import React, { useState } from 'react';

import '../App.css';

const CV = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const allTags = ['tag1', 'tag2', 'tag3', 'tag4']; // Replace with your actual tags

    const experiences = [
        // Add your experiences here. For example:
        {
            title: 'Job Title 1',
            employer: 'Employer 1',
            tags: ['tag1', 'tag2'],
            description: 'Job Description 1',
        },
        {
            title: 'Job Title 2',
            employer: 'Employer 2',
            tags: ['tag3', 'tag4'],
            description: 'Job Description test',
        },
        {
          title: 'Job Title 3',
          employer: 'Employer 2',
          tags: ['tag3', 'tag4'],
          description: 'Job Description test',
        },
        {
          title: 'Job Title 4',
          employer: 'Employer 2',
          tags: ['tag3', 'tag4'],
          description: 'Job Description test',
        },
        // More experiences...
    ];

    const filteredExperiences = experiences.filter(experience => 
        selectedTags.length === 0 || experience.tags.some(tag => selectedTags.includes(tag))
    );

    const handleTagChange = (tag) => {
        setSelectedTags(prevTags => 
            prevTags.includes(tag) 
                ? prevTags.filter(t => t !== tag) 
                : [...prevTags, tag]
        );
    };

    const usps = [
      {
          title: "Rust",
          copy: "rust kan brengen waar in onderwijsorganisaties behoefte is aan die rust, aan senioriteit, aan management vanuit wijsheid en begrip."
      },
      {
          title: "Interim",
          copy: "Kan vervangen vanuit een bak ervaring als schoolleider, rector of teamleider"
      },
      {
          title: "Coaching",
          copy: "Veel ervaring heb als (geaccrediteerd) coach voor schoolleiders"
      },
      {
          title: "Visieontwikkeling",
          copy: "Grote ervaring heb met ingewikkelde projecten rond visieontwikkeling op gebieden als taakbeleid, doorlopende leerlijn, kwaliteitszorg, bedrijfsvoering"
      },
    ];

    return (
        <div className='cv-content'>
            <h1 className='h2-1'>Waar kan ik uw organisatie mee helpen</h1>
            <p className='homep'>Korte intro met de volgende haakjes positief denken, energie, verbindend, plezier, leren, nieuwsgierig, onderwijs. En nog meer woorden: Stijl. Eerder ingetogen dan uitbundig. Meer fiets dan formule-1. ‘Dicht bij huis’. .</p>

            <hr />

            <h3 className='h3-1'>Diensten</h3>

            <div className="usps">
                {usps.map(usp => (
                    <div className="usp-cv" key={usp.title}>
                        <div className="usp-cv-Title">{usp.title}</div>
                        <div className="usp-cv-Copy">{usp.copy}</div>
                    </div>
                ))}
            </div>

            <hr />

            <h3 className='h3-1'>Mijn ervaringen op een rij</h3>

            <div className="filters-container">
                <div className="filter-label">Kies hier uw filters: </div>
                {allTags.map(tag => (
                    <div key={tag}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={selectedTags.includes(tag)} 
                                onChange={() => handleTagChange(tag)} 
                            />
                            {tag}
                        </label>
                    </div>
                ))}
            </div>
            
            <div className='experiences'>
              {filteredExperiences.map((experience, index) => (
                <div className="experience-card" key={index}>
                  <h2 className="experience-card-title">{experience.title}</h2>
                  <h3 className="experience-card-employer">{experience.employer}</h3>
                  <p className="experience-card-tags">Tags: {experience.tags.join(', ')}</p>
                  <hr className="experience-divider" />
                  <p className="experience-card-description">{experience.description}</p>
                </div>
              ))}
            </div>

        </div>
    );
};

export default CV;
