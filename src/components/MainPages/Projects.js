import React, { Component } from 'react';
import { useParams } from 'react-router-dom'

function Projects(){

        const { categoryId } = useParams()
        return ( <h1>{categoryId}</h1> );
}
export default Projects;