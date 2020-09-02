export class Data {
    flight_number:number;
    mission_name:string;
    mission_id:string;
    launch_year:string;
    launch_success:boolean;
    land_success:boolean;
    mission_patch_small:any;
    
    constructor(
        flight_number:number,
        mission_name:string,
        mission_id:string,
        launch_year:string,
        launch_success:boolean,
        land_success:boolean,
        mission_patch_small:any
    ){
        this.flight_number = flight_number;
        this.mission_name = mission_name;
        this.mission_id = mission_id;
        this.launch_year = launch_year;
        this.launch_success = launch_success;
        this.land_success = land_success; 
        this.mission_patch_small = mission_patch_small;
    }
}
