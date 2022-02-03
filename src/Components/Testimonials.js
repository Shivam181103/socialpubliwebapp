import React from 'react';
import './Testimonials.css'

const Testimonials = () => {
    return (
        <>
        <section>
          <div className="carousel-card container">
        <div class="card">
  <div class="card-body w-100">
    <h5 class="card-title">Testimonials</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  </div>
  <div class="col-lg-10 offset-lg-1 pt-5 pb-5 text-dark">
  <div id="client-testimonial-carousel" class="carousel slide" data-ride="carousel" >
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active text-center p-4">
        <blockquote class="blockquote text-center">
          <p class="mb-0"><i class="fa fa-quote-left"></i> Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.
          </p>
          <footer class="blockquote-footer">Albert Einstein <cite title="Source Title">genius</cite></footer>
        </blockquote>
      </div>
      <div class="carousel-item text-center p-4">
        <blockquote class="blockquote text-center">
          <p class="mb-0"><i class="fa fa-quote-left"></i> Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
          </p>
          <footer class="blockquote-footer">Albert Einstein <cite title="Source Title">genius</cite></footer>
          <p class="client-review-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </p>
        </blockquote>
      </div>
      <div class="carousel-item text-center p-4">
        <blockquote class="blockquote text-center">
          <p class="mb-0"><i class="fa fa-quote-left"></i> A person who never made a mistake never tried anything new.
          </p>
          <footer class="blockquote-footer">Albert Einstein <cite title="Source Title">genius</cite></footer>
          <p class="client-review-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </p>
        </blockquote>
      </div>
    </div>
    <ol class="carousel-indicators">
      <li data-target="#client-testimonial-carousel" data-slide-to="0" class="active"></li>
      <li data-target="#client-testimonial-carousel" data-slide-to="1"></li>
      <li data-target="#client-testimonial-carousel" data-slide-to="2"></li>
    </ol>
  </div>
</div>

</div>
        </section>
        </>
    );
};

export default Testimonials;
