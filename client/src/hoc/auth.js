//import { Axios } from 'axios';
//import { response } from 'express';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function Auth(SpecificComponent, option, adminRoute = null) {
    //option : null = anyone, true = login user only, false = logout user only

    function AuthenticationCheck (props) {

        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response)

              //로그인 하지 않은 상태
              if(!response.payload.isAuth) {
                if(option) {
                    navigate('/login')
                }
              } else {
                //로그인 한 상태
                if(adminRoute && !response.payload.isAdmin) {
                    navigate('/')
                } else {
                    if(!option) {
                        navigate('/')
                    }
                }
              }
            })
        }, [])
    }

    return (
        <SpecificComponent />
    )
    return AuthenticationCheck
}
export default Auth;