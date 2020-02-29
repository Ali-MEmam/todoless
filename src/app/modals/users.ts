export interface users{
    id?:string;
    name?:string;
    email?:string;
    title?:string;
    password?:any;
    phone?:any;
    friends?:any;
    friendsRequest?:any;
    projects?:[{
        projectId?:any;
        edit?:any
    }];
    tasks?:any;
}

