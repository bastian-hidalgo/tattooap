export const ACTIONS = {
  GET_PROJECTS: 'APP/PROJECTS/GET_PROJECTS'
};

const projectActions = {
  getProjects: (data) => 
    ({
      type: ACTIONS.GET_PROJECTS,
      data: data
    })
}

export default projectActions;
