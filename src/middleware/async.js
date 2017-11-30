export default function({ dispatch }){
  return next => action => {
    //if action does not have payload
    //or payload does not have a .then property
    //bypass middleware
    if( !action.payload || !action.payload.then ){
      return next(action);
    }

    action.payload
      .then( function(res){
      const newAction = { ...action, payload: res };
      return dispatch(newAction);
    });
  }
}