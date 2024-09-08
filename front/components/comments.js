import Image from "next/image";
import React from "react";
import menu from "../public/menu-circle-vertical.png";
import arrow from "../public/Combo shape.png";
import { useTranslation } from "../context/TranslationContext";
import { useRouter } from "next/router";

function Comments() {
  const { t } = useTranslation();
  const router = useRouter();
  const Id = router.query;
  const idProduct = Id.id;

  // Find the product using its id
  const listProducts = t("list").filter((el) => el.id == idProduct);

  // If a product is found, extract the comments
  const comments = listProducts.length > 0 ? listProducts[0].comment : [];

  return (
    <div>
      <h3 style={{ fontSize: "24px" }} className="font-bold mt-5 mb-5">
        {t("comment")}
      </h3>

      {
        
       
        comments.map((comment, index) => (
        <div
          key={index}
          className="comment p-4 mt-5 mb-5 border rounded-lg"
          style={{ backgroundColor: "#f3f3f3" }}
        >
          <div className="head flex items-center justify-between">
            <div className="flex items-center">
              {/* Display the commenter's profile picture */}
              {comment.pic && (
                <Image
                  className="rounded-full"
                  alt="user"
                  width={40}
                  height={40}
                  src={comment.pic}
                />
              )}
              <div className="ms-2">
                {/* Display the commenter's name */}
                <h4 style={{ fontSize: "16px" }} className="font-bold">
                  {comment.name}
                </h4>
                <p style={{ color: "#bfc0c0", fontSize: "12px" }}>
                  {comment.time} minutes ago
                </p>
              </div>
            </div>

            <Image alt="menu" width={40} height={40} src={menu} />
          </div>
          {/* Display the comment content */}
          <p className="mt-2">{comment.content}</p>
        </div>
      ))
      
      
      }

      {/* Comment submission form */}
      <form
        method="POST"
        action=""
        className="formSubmit flex items-center justify-between mb-5"
      >
        <div
          style={{ width: "100%" }}
          className="p-3 flex items-center justify-between bg-white border rounded-md"
        >
          <input
            className="border-none outline-none w-full"
            placeholder="Add your comment"
            width={100}
          />
          <button className="outline-none border-none">
            <Image alt="send" width={30} height={30} src={arrow} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Comments;
