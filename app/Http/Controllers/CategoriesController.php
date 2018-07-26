<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Category\CreateCategoryRequest;
use App\Category;

class CategoriesController extends Controller
{

    public function index()
    {
        return Category::all();
    }


    public function store(CreateCategoryRequest $request)
    {
        $category = Category::create([

                'name' => $request->name

        ]);

        return $category;
    }


}
