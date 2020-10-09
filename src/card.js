import React from 'react';

export const Card =(props) => {
    return(

<div class={props.class}>
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src={props.img} alt=""></img></p>
                                    <h4 class="card-title" style={{fontWeight:"bold"}}>{props.name}</h4>
                                    <p class="card-text">{props.position}</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title" style={{fontWeight:"bold"}}>{props.name}</h4>
                                    <p class="card-text">{props.desc}</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="icon brands style2 fa-linkedin sept-link" target = "_blank" rel = "noopener noreferrer" href={props.link}>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="icon brands style2 fa-github sept-link" target = "_blank" rel = "noopener noreferrer" href={props.git}>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}



