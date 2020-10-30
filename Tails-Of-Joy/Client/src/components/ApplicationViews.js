
import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import AnimalList from "./animal/AnimalList"
import AnimalDetails from "./animal/AnimalDetails"
import AnimalAdd from "./animal/AnimalAdd"
import AnimalDelete from "./animal/AnimalDelete";
import AnimalEdit from "./animal/AnimalEdit"
import PostList from "./post/PostList"
import PostDetails from "./post/PostDetails"
import PostAdd from "./post/PostAdd"
import PostDelete from "./post/PostDelete"
import PostEdit from "./post/PostEdit"
import CommentAdd from "./comment/CommentAdd"
import CommentDelete from "./comment/CommentDelete"
import CommentEdit from "./comment/CommentEdit"
import UserProfileDetails from "./userProfile/UserProfileDetails"
import UserProfileDelete from "./userProfile/UserProfileDelete"
import UserProfileEdit from "./userProfile/UserProfileEdit"
import MyProfileDetails from "./userProfile/MyProfileDetails"
import AdoptionPendingList from "./adoption/AdoptionPendingList"
import AdoptionAdd from "./adoption/AdoptionAdd"
import AdoptionApproval from "./adoption/AdoptionApproval"
import AdoptionDenial from "./adoption/AdoptionDenial"

export function ApplicationViews() {
    const { isLoggedIn, activeUser } = useContext(UserProfileContext);

    return (
        <main>
            <Switch>

                <Route exact path="/animal">
                    {isLoggedIn ? <AnimalList /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/animal/details/:id">
                    {isLoggedIn ? <AnimalDetails /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/animal/add">
                    {isLoggedIn && activeUser.userTypeId === 1 ? <AnimalAdd /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/animal/delete/:id">
                    {isLoggedIn && activeUser.userTypeId === 1 ? <AnimalDelete /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/animal/edit/:id">
                    {isLoggedIn && activeUser.userTypeId === 1 ? <AnimalEdit /> : <Redirect to="/login" />}
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

                <Route exact path="/comment/add/:id">
                    {isLoggedIn ? <CommentAdd /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/comment/delete/:id">
                    {isLoggedIn ? <CommentDelete /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/comment/edit/:id">
                    {isLoggedIn ? <CommentEdit /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/userprofile/q=:id">
                    {isLoggedIn ? <UserProfileDetails /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/userprofile/delete/:id">
                    {isLoggedIn ? <UserProfileDelete /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/userprofile/edit/:id">
                    {isLoggedIn ? <UserProfileEdit /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/myprofile">
                    {isLoggedIn ? <MyProfileDetails /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/pendingAdoptions">
                    {isLoggedIn && activeUser.userTypeId === 1 ? <AdoptionPendingList /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/createAdoption/:id">
                    {isLoggedIn ? <AdoptionAdd /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/pendingAdoptions/approve/:id">
                    {isLoggedIn && activeUser.userTypeId === 1 ? <AdoptionApproval /> : <Redirect to="/login" />}
                </Route>

                <Route exact path="/pendingAdoptions/deny/:id">
                    {isLoggedIn && activeUser.userTypeId === 1 ? <AdoptionDenial /> : <Redirect to="/login" />}
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