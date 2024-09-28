<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class cartItemController extends Controller
{
    public function index()
    {
        $products = Cart::all();
        $countItem = Cart::count();
        return response()->json([
            "status" => true,
            "countItem" => $countItem,
            "error" => null,
            "data" => $products
        ], 200);
    }
    public function store(Request $request)
    {
 
        $product_id = $request->input('product_id');
 
        $product  = Products::find($product_id);
         
        $cart = Cart::create([
            "nameProduct" => $product->title,
            "imageProduct" => $product->image,
            "priceProduct" => $product->newPrice,
            "id_user" => $product->id_user,
            "id_product" => $product_id,

        ]);

       
        return response()->json([
            "status" => true,
            "message" => "prodcuts add to cart succefuly",
            "data" => $cart
        ], 201);
 
    }

    public function show($id)
    {
        
        $product = Cart::findOrFail($id);
        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            "id_product" => 'required|numeric',
            "id_user" => 'required|numeric',
            "quantity" => 'required|numeric',
        ]);

        $product = Cart::findOrFail($id);
        $product->update($validatedData);

        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 200);
    }

    public function destroy($id)
    {
        $product = Cart::findOrFail($id);
        $product->delete();

        return response()->json([
            "status" => true,
            "error" => null,
            "message" => "Order was deleted succsefuly",
        ], 204);
    }
}
