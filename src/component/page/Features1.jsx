import React from "react";
import '../../App.css';


function Features1(){
    return (
        // Features1        
        <section className="features" id="features1">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                            <img src="/img/logo.png" alt="..." style={{height: '2.5rem'}} />
                            <div style={{fontWeight: 'bold'}}>현재 건강 상태 진단부터</div> <div style={{color: 'rgb(44, 110, 246)', fontWeight: 'bold'}}>미래 생활 패턴 예측까지</div>
                            <div className="text-muted mb-5" style={{fontSize: '0.7em'}}>가족의 건강을 미리 관리하는 더 스마트한 케어 솔루션<br />
                                    Carepia를 지금 만나보세요.
                            </div>
                            <div className="d-flex flex-column flex-lg-row align-items-center">
                                <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="/img/Frame 3.png" alt="..." /></a>
                                <a href="#!"><img className="app-badge" src="/img/Frame 4.png" alt="..." /></a>
                            </div>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="features-device-mockup">
                            <div>
                                <img src="/img/iPhone_13.png" alt="phone" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    )
}

export default Features1;