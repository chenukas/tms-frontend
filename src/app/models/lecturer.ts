export class Lecturer{
    private empid: string;
    private fname: string;
    private lname: string;
    private email: string;
    private faculty: string;
    private department: string;
    private center: string;
    private building: string;
    private level: number;

    constructor(value){
        this.empid = value.empid;
        this.fname = value.fname;
        this.lname = value.lname;
        this.email = value.email;
        this.faculty = value.faculty;
        this.department = value.department;
        this.center = value.center;
        this.building = value.building;
        this.level = value.level;
    }

    public get getempid(): string {
        return this.empid;
    }
    
    public set setempid( empid: string) {
        this.empid = empid;
    }

    public get getfname(): string {
        return this.fname;
    }

    public set setfname( fname: string) {
        this.fname = fname;
    }

    public get getlname(): string {
        return this.lname;
    }

    public set setlname( lname : string) {
        this.lname = lname;
    }

    public get getemail(): string {
        return this.email;
    }

    public set setemail( email : string) {
        this.email = email;
    }

    public get getfaculty() : string {
        return this.faculty;
    }

    public set setfaculty( faculty : string) {
        this.faculty = faculty;
    }

    public get getdept() : string {
        return this.department;
    }

    public set setdept( department : string) {
        this.department = department;
    }

    public get getcenter() : string {
        return this.center;
    }

    public set setcenter( center : string ) {
        this.center = center;
    }

    public get getbuild() : string {
        return this.building;
    }

    public set setbuild( building : string ) {
        this.building = building;
    }

    public get getlevel() : number {
        return this.level;
    }

    public set setlevel( level : number ) {
        this.level = level;
    }
}

