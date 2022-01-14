export const ACTIONS = {
  GET_PROJECTS: 'APP/PROJECTS/GET_PROJECTS',
  UPLOAD_PROJECT: 'APP/PROJECTS/UPLOAD_PROJECT'
};

const projectActions = {
  getProjects: (data) => 
    ({
      type: ACTIONS.GET_PROJECTS,
      data: data
    }),
  uploadProject: (data) => 
    ({
      type: ACTIONS.UPLOAD_PROJECT,
      data: data
    })
}

export default projectActions;
