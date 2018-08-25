<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BrowsingData;

class BrowsingDataController extends Controller
{
    public function store(Request $request)
    {
        if ($request->url) 
        {
            $len = sizeof($request->url);
            for ($i = 0; $i < $len; $i++) {
                $browsingData = BrowsingData::create(

                    [
                        'url' => $request->url[$i],
                        'time' => $request->time[$i]
                    ]
                );
            }

        }
    }
}
