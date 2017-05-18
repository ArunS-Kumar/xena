import {combineReducers} from 'redux';
import ProjectList from './project-list';
import Skills from './skills';
import { reducer as formReducer } from 'redux-form'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    projectlist: ProjectList,
    skills: Skills,
    form: formReducer,
});

export default allReducers
