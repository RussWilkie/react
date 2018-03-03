import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';


describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            autRedirectPath: '/'
        });
    });
    it('should store token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            autRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            autRedirectPath: '/'
        });
    });
});