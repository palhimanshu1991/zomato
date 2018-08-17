<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BrowsingData;

class BrowsingDataController extends Controller
{
    public function store(Request $request)
    {
        $len = sizeof($request->url);
        for ($i = 0; $i < $len; $i++) {
                    $browsingData = BrowsingData::updateOrCreate(
                [
                    'url' => $request->url[$i]
                ],
                [
                    'url' => $request->url[$i],
                    'time' => $request->time[$i]
                ]
            );
        }

    }
}
