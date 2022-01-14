export const ACTIONS = {
  GET_PROJECTS: 'APP/PROJECTS/GET_PROJECTS',
  GET_PROJECTS_BY_ID: 'APP/PROJECTS/GET_PROJECTS_BY_ID',
  UPLOAD_PROJECT: 'APP/PROJECTS/UPLOAD_PROJECT'
};

const projectActions = {
  getProjects: (data) => 
    ({
      type: ACTIONS.GET_PROJECTS,
      data: data
    }),
  getProjectsById: (data) => 
    ({
      type: ACTIONS.GET_PROJECTS_BY_ID,
      data: data
    }),
  uploadProject: (data) => 
    ({
      type: ACTIONS.UPLOAD_PROJECT,
      data: data
    })
}

export default projectActions;
