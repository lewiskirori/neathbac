import "./blogs.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import BlogPost from "../../components/blogpost/BlogPost";
import Pagination from "../../components/pagination/Pagination";
import CommentSection from "../../components/commentsection/CommentSection";
import { useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const blogPosts = [
    {
      title: "Easy Steps to Keep Your Kitchen Neat and Organized",
      author: "Arya Stark",
      date: "Apr 15, 2023",
      image: "https://ecommerce-vite-six.vercel.app/img/blog2.webp",
      content:
        "Keeping your kitchen neat and organized can be a daunting task, especially when you have a busy lifestyle. However, with a few easy steps, you can ensure that your kitchen remains tidy and clutter-free.",
    },
    {
      title: "Save Money on Groceries",
      author: "Jon Snow",
      date: "Apr 12, 2023",
      image: "https://ecommerce-vite-six.vercel.app/img/blog1.webp",
      content:
        "Groceries can take up a significant portion of your budget, but there are many ways to save money on your grocery bills. In this article, we will share some tips to help you save money on groceries.",
    },
    {
      title: "The Benefits of Meditation for Stress Reduction",
      author: "Bran Stark",
      date: "May 7, 2023",
      image:
        "https://images.pexels.com/photos/12911180/pexels-photo-12911180.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:
        "Stress is an inevitable part of life, but there are ways to manage it effectively. Meditation is a powerful tool that can help you reduce stress and improve your overall well-being. In this article, we'll explore the benefits of meditation and provide some tips to help you get started",
    },
    {
      title: "The Ultimate Guide to Traveling on a Budget",
      author: "Daenerys Targaryen",
      date: "May 3, 2023",
      image:
        "https://images.pexels.com/photos/7412073/pexels-photo-7412073.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:
        "Traveling can be expensive, but it doesn't have to break the bank. With a little bit of planning and some smart budgeting strategies, you can explore new places without spending a fortune. In this article, we'll share some tips for traveling on a budget.",
    },
    {
      title: "How to Choose the Right Running Shoes for Your Feet",
      author: "Jaime Lannister",
      date: " May 4, 2023",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ecommerce-test-d0795.appspot.com/o/images%2Fwhite.PNG?alt=media&token=3a1ef0ec-aaf6-4362-967b-978ba66cd212",
      content:
        "Running is a great way to stay fit and healthy, but it's important to make sure that you have the right shoes to support your feet. In this article, we'll walk you through the process of choosing the perfect running shoes for your feet.",
    },
    {
      title: "The Importance of a Healthy Work-Life Balance",
      author: "Cersei Lannister",
      date: " May 5, 2023",
      image:
        "https://images.pexels.com/photos/459600/pexels-photo-459600.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:
        "Maintaining a healthy work-life balance is essential for both your physical and mental well-being. In this article, we'll explore the importance of finding the right balance between work and leisure, and share some tips for achieving a more balanced lifestyle.",
    },
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blogs">
      <Sidebar />
      <div className="blogsContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Blogs
            <Link
              // to=""
              // onClick={naviga}
              style={{ textDecoration: "none" }}
              className="link"
            >
              Add New
            </Link>
          </div>
        </div>
        <div className="blogPosts">
          {currentPosts.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </div>
        <Pagination
          blogPosts={blogPosts}
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          onPageChange={paginate}
        />
        <CommentSection />
      </div>
    </div>
  );
};

export default Blogs;
