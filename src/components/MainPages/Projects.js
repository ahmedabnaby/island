import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getProjects } from '../../services/projects';

function Projects(){
        const [projects, setProject] = useState([]);
        const { categoryId } = useParams()
        useEffect(() => {
                let mounted = true;
                getProjects()
                .then(projects => {
                        if(mounted) {
                                setProject(projects)
                        }
                })
                return () => mounted = false;
        }, [])
        return (
                <div>
        {console.log(projects)}
<div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="ltn__breadcrumb-inner">
          <h1 className="page-title">Projects</h1>
          <div className="ltn__breadcrumb-list">
            <ul>
              <li><a href="#"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</a></li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ltn__product-area ltn__product-gutter mb-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="ltn__shop-options">
          <ul>
            <li>
              <div className="ltn__grid-list-tab-menu ">
                <div className="nav">
                  <a className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large" /></a>
                  <a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a>
                </div>
              </div>
            </li>
            {/* <li>
              <div className="showing-product-number text-right">
                <span>Showing 9 of 20 results</span>
              </div> 
            </li> */}
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="liton_product_grid">
            <div className="ltn__product-tab-content-inner ltn__product-grid-view">
              <div className="row">
                {/* ltn__product-item */}
                {projects?.filter(project => project.category === parseInt(categoryId)).length > 0 ? 
                projects?.filter(project => project.category === parseInt(categoryId)).map((project)=>
                        <div className="col-lg-4 col-sm-6 col-12" key={project.id}>
                                {/* {console.log("CATEGORY ID " + categoryId)} */}
                                {/* {project.category === parseInt(categoryId) ?  */}
                          <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                            <div className="product-img">
                              <a href="product-details.html"><img src={project.image} alt="#" /></a>
                              <div className="real-estate-agent">
                                <div className="agent-img">
                                  <a href="team-details.html"><img src="img/blog/author.jpg" alt="#" /></a>
                                </div>
                              </div>
                            </div>
                            <div className="product-info">
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badg">For Rent</li>
                                </ul>
                              </div>
                              <h2 className="product-title"><a href="product-details.html">{project.title}</a></h2>
                              <div className="product-img-location">
                                <ul>
                                  <li>
                                    <a href="locations.html"><i className="flaticon-pin" /> Belmont Gardens, Chicago</a>
                                  </li>
                                </ul>
                              </div>
                              <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                <li><span>3 </span>
                                  Bedrooms
                                </li>
                                <li><span>2 </span>
                                  Bathrooms
                                </li>
                                <li><span>3450 </span>
                                  square Ft
                                </li>
                              </ul>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                      <i className="flaticon-expand" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                      <i className="flaticon-heart-1" /></a>
                                  </li>
                                  <li>
                                    <a href="product-details.html" title="Product Details">
                                      <i className="flaticon-add" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info-bottom">
                              <div className="product-price">
                                <span>$34,900<label>/Month</label></span>
                              </div>
                            </div>
                          </div>
                          {/* : 
                          console.log('none')    
                          } */}
                        </div>
                        )
                
                : 
          <h1 className="page-title">No Projects Added.</h1>
        }
                
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="liton_product_list">
            <div className="ltn__product-tab-content-inner ltn__product-list-view">
              <div className="row">
                {/* ltn__product-item */}
                {projects?.filter(project => project.category === parseInt(categoryId)).length > 0 ? 
                projects?.filter(project => project.category === parseInt(categoryId)).map((project)=>

                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                    <div className="product-img">
                      <a href="product-details.html"><img src={project.image} alt="#" /></a>
                    </div>
                    <div className="product-info">
                      <div className="product-badge-price">
                        <div className="product-badge">
                          <ul>
                            <li className="sale-badg">For Rent</li>
                          </ul>
                        </div>
                        <div className="product-price">
                          <span>$34,900<label>/Month</label></span>
                        </div>
                      </div>
                      <h2 className="product-title"><a href="product-details.html">{project.title}</a></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <a href="locations.html"><i className="flaticon-pin" /> Belmont Gardens, Chicago</a>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bedrooms
                        </li>
                        <li><span>2 </span>
                          Bathrooms
                        </li>
                        <li><span>3450 </span>
                          square Ft
                        </li>
                      </ul>
                    </div>
                    <div className="product-info-bottom">
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <a href="team-details.html"><img src="img/blog/author.jpg" alt="#" /></a>
                        </div>
                        <div className="agent-brief">
                          <h6><a href="team-details.html">William Seklo</a></h6>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></a>
                          </li>
                          <li>
                            <a href="product-details.html" title="Product Details">
                              <i className="flaticon-add" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                        )
                : 
          <h1 className="page-title">No Projects Added.</h1>
        }
                
              </div>
            </div>
          </div>
        </div>
        {/* <div className="ltn__pagination-area text-center">
          <div className="ltn__pagination">
            <ul>
              <li><a href="#"><i className="fas fa-angle-double-left" /></a></li>
              <li><a href="#">1</a></li>
              <li className="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">...</a></li>
              <li><a href="#">10</a></li>
              <li><a href="#"><i className="fas fa-angle-double-right" /></a></li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  </div>
</div>
</div>


);
}
export default Projects;