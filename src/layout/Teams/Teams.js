import { useEffect, useState } from 'react';



import './Teams.css';
// import { Teamsdata } from '~/datas/datas';
function Teams() {
    const [Teamsdata,setTeamsdata] = useState([])
    useEffect(()=>{
        fetch('/api/teamsdata/')
            .then((response) => response.json())
            .then((data) => {
                setTeamsdata(data)
            });
    },[])




    return (
        <div className="wrapper">
            <div className="container">
                <div className="team">
                    <div className="team_header" data-aos="zoom-in">
                        <h2 className="team_heading">Meet Our Team of Experts</h2>
                        <p className="team_sub">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                    </div>
                    <div className="team_body">
                        {Teamsdata.map(({ image, job, name, sub }, index) => {
                            return (
                                <div key={index} className="team_item" data-aos="flip-left">
                                    <div className="team_item-image">
                                        <img src={image} alt="loi" />
                                    </div>
                                    <div className="team_content">
                                        <span className="team_job">{job}</span>
                                        <h3 className="team_name">{name}</h3>
                                        <p className="team_content-sub">{sub}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teams;
