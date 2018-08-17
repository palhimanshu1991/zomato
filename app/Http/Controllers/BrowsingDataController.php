<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BrowsingData;

class BrowsingDataController extends Controller
{
    public function store(Request $request){
        $len = sizeof($request->url);
        for($i=0;$i<$len;$i++) {
            echo $request->url[$i];
            echo $request->time[$i];
        }
     //foreach ($Request- as)

    }
}
