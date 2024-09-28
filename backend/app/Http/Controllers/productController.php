<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class productController extends Controller
{
    public function index()
    {
        $products = Products::all();
        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $products
        ], 200);
    }
 
    // Store a newly created product in storage
    public function store(Request $request)
    {
        $id_user_fake = 3;

       

        $validatedData = $request->validate([
            "title"	=> 'string|max:255|nullable',
            "oldPrice"	=> 'numeric|nullable',
            "newPrice"	=> 'numeric|nullable',
            'image' => 'string', 
            "color"	=> 'string|max:255|nullable',
            "size"	=> 'string|max:255|nullable',
            "shipping"	=> 'string|max:255|nullable',
            "brand"	=> 'string|max:255|nullable',
            "condition"	=> 'string|max:255|nullable',
            "model"	=> 'string|max:255|nullable',
            "category"	=> 'string|max:255|nullable', 
            "description"	=> 'string|max:100', 
            "quantity"	=> 'numeric|max:255', 
            "discount" => 'numeric',
            "review" => 'numeric|nullable', 
        ]);
        // Add the fake user ID after validation
        $validatedData['id_user'] = $id_user_fake;
        if($request->hasFile('image')) {
            $imageName = $request->file("image")->getClientOriginalName();
            $path = $request->file("image")->storeAs('items', $imageName, 'images');
            $validatedData["image"] = $path;
       }
    
      

        $product = Products::create($validatedData);

        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 201);

    }

  
    public function show($id)
    {
        $product = Products::findOrFail($id);
        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 200);
    }
 
    // Update the specified product in storage
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
           "title"	=> 'required|string|max:255',
            "oldPrice"	=> 'required|numeric|max:255',
            "newPrice"	=> 'required|numeric|max:255',
            "image"	=> 'required|string|max:255',
            "color"	=> 'required|string|max:255',
            "size"	=> 'required|string|max:255',
            "shipping"	=> 'required|string|max:255',
            "discount" => 'required|numeric',
            "id_user" => 'required|numeric',
        ]);

        $product = Products::findOrFail($id);
        $product->update($validatedData);

        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 200);
    }

    // Remove the specified product from storage
    public function destroy($id)
    {
        $product = Products::findOrFail($id);
        $product->delete();

        return response()->json([
            "status" => true,
            "error" => null,
            "message" => "product was deleted succsefuly",
            "data" => $product
        ], 204);
    }
}
