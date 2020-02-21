export interface users{
    id?:string;
    name?:string;
    email?:string;
    password?:any;
    phone?:any;
    friends?:any;
    group?:any;
    projects?:[{
        projectId?:any;
        edit?:any
    }];
    tasks?:any;
}