const initstate={
    projects: [
        {id: '1', idea: 'help me find peach', description: 'blah blah blah'},
        {id: '2', idea: 'collect all the stars', description: 'blah blah blah'},
        {id: '3', idea: 'egg hunt with yoshi', description: 'blah blah blah'}
      ]
    }
const projectReducer =(state=initstate,action)=>{
  switch(action.type)
  {
    case 'CREATE_PROJECT':
      console.log("project created", action.project)
      return state
    case 'CREATE_ERROR':
      console.log("create error",action.err)
      return state;
    default:
      return state;
  }
}

export default projectReducer;