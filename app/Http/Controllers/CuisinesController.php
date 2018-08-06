<?php

namespace App\Http\Controllers;

use App\Cuisine;
use App\Http\Requests\Cuisine\CreateCuisineRequest;
use Illuminate\Http\Request;

class CuisinesController extends Controller
{

    public function index()
    {
        return Cuisine::orderBy('id', 'desc')->get();
    }

    public function store(CreateCuisineRequest $request)
    {
        return Cuisine::create([
            'name' => $request->name
        ]);

    }

}