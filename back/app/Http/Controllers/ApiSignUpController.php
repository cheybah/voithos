<?php namespace App\Http\Controllers;

		use Session;
		use Request;
		use DB;
		use CRUDBooster;

		class ApiSignUpController extends \crocodicstudio\crudbooster\controllers\ApiController {

		    function __construct() {    
				$this->table       = "cms_users";        
				$this->permalink   = "sign_up";    
				$this->method_type = "post";    
		    }
		

		    public function hook_before(&$postdata) {
		        //This method will be execute before run the main process
	        	$users = DB::table('cms_users')->where("email","=",$postdata["email"])->select('name', 'email as user_email')->first();
				if (!is_null($users)) {
					$postdata=[];				
				}
				


		    }

		    public function hook_query(&$query) {
		        //This method is to customize the sql query
				dd($query) ;

		    }

		    public function hook_after($postdata,&$result) {
		        //This method will be execute after run the main process
					$result["message"]="User succesfully added to Database";
					if (empty($postdata)) {
					DB::table('cms_users')->where('id', '=', $result["id"])->delete();
					$result["message"]="User aleady exists in Database";
				}
		    }

		}