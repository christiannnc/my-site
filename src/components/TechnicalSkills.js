import React, { useCallback, useState } from "react";
import "../css/technicalSkills.css";

export default function TechnicalSkills() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="technical-skills-section">
            <label className="section-header">Skills</label>

            <div className="skills-selector-container">
                <div className="skills-category-selector">
                    <label
                        className="category-label"
                        onClick={(e) => setSelectedCategory("all")}
                    >
                        All
                    </label>
                    <label
                        className="category-label"
                        onClick={(e) => setSelectedCategory("languages")}
                    >
                        Languages
                    </label>
                    <label
                        className="category-label"
                        onClick={(e) => setSelectedCategory("frameworks")}
                    >
                        Frameworks
                    </label>
                    <label
                        className="category-label"
                        onClick={(e) => setSelectedCategory("databases")}
                    >
                        Databases
                    </label>
                </div>
            </div>

            <div className="skills-container">
                {selectedCategory === "all" ? (
                    <All />
                ) : selectedCategory === "languages" ? (
                    <Languages />
                ) : selectedCategory === "frameworks" ? (
                    <Frameworks />
                ) : selectedCategory === "databases" ? (
                    <Databases />
                ) : null}
            </div>
        </div>
    );
}

function All() {
    return (
        <>
            <JavaCard />
            <PythonCard />
            <JavaScriptCard />
            <CCard />
            <ReactCard />
            <NodeCard />
            <MongoDBCard />
            <RedisCard />
        </>
    );
}

function Languages() {
    return (
        <>
            <JavaCard />
            <PythonCard />
            <JavaScriptCard />
            <CCard />
        </>
    );
}

function Frameworks() {
    return (
        <>
            <ReactCard />
            <NodeCard />
        </>
    );
}

function Databases() {
    return (
        <>
            <MongoDBCard />
            <RedisCard />
        </>
    );
}

function JavaCard() {
    return (
        <div className="skill-card">
            <i class="devicon-java-plain skill-icon"></i>

            <label className="skill-label">Java</label>
        </div>
    );
}

function PythonCard() {
    return (
        <div className="skill-card">
            <i class="devicon-python-plain skill-icon"></i>

            <label className="skill-label">Python</label>
        </div>
    );
}

function JavaScriptCard() {
    return (
        <div className="skill-card">
            <i class="devicon-javascript-plain skill-icon"></i>

            <label className="skill-label">JavaScript</label>
        </div>
    );
}
function NodeCard() {
    return (
        <div className="skill-card">
            <i class="devicon-nodejs-plain skill-icon"></i>

            <label className="skill-label">Node.js</label>
        </div>
    );
}
function CCard() {
    return (
        <div className="skill-card">
            <i class="devicon-c-plain skill-icon"></i>

            <label className="skill-label">C</label>
        </div>
    );
}
function ReactCard() {
    return (
        <div className="skill-card">
            <i class="devicon-react-original skill-icon"></i>

            <label className="skill-label">React</label>
        </div>
    );
}

function MongoDBCard() {
    return (
        <div className="skill-card">
            <i class="devicon-mongodb-plain skill-icon"></i>

            <label className="skill-label">MongoDB</label>
        </div>
    );
}

function RedisCard() {
    return (
        <div className="skill-card">
            <i class="devicon-redis-plain skill-icon"></i>

            <label className="skill-label">Redis</label>
        </div>
    );
}
