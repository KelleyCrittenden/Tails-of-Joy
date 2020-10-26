
import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import AnimalList from "./animal/AnimalList"
import AnimalDetails from "./animal/AnimalDetails"
import PostList from "./post/PostList"
import PostDetails from "./post/PostDetails"
import PostAdd from "./post/PostAdd"
import PostDelete from "./post/PostDelete"
import PostEdit from "./post/PostEdit"


export function ApplicationViews() {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <main>
            <Switch>

                <Route exact path="/animal">
                    {isLoggedIn ? <AnimalList /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/animal/details/:id">
                    {isLoggedIn ? <AnimalDetails /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/post">
                    {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/post/details/:id">
                    {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/post/add">
                    {isLoggedIn ? <PostAdd /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/post/delete/:id">
                    {isLoggedIn ? <PostDelete /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/post/edit/:id">
                    {isLoggedIn ? <PostEdit /> : <Redirect to="/login" />}
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </main>
    );
};