import { Link } from "react-router-dom"

export default function FeaturesHome(){

    return(
    <div className="features-home">
        <div className="container flex">
            <h1 className="title">Features</h1>
            <div className="grid-container">
                <div className="grid-item item1">
                    <div className="content">
                        <div className="icon">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M74.1651 19.0533L47.6396 9.40564V12.3061L73.2305 21.6186C73.5251 21.7233 73.7763 21.8699 74.0087 22.0597C74.1234 22.1435 74.239 22.2483 74.334 22.353C75.0377 23.1003 75.3007 24.2141 74.9335 25.2547L56.6779 75.395C56.1424 76.865 54.5124 77.6227 53.0418 77.0863L20.7782 65.3469C20.2946 65.1688 19.8849 64.8744 19.5799 64.4961H16.4902C17.0157 66.0302 18.2029 67.3128 19.8423 67.9122L52.106 79.6606C54.1557 80.4067 56.3415 79.8819 57.8238 78.4839C58.034 78.2942 58.2229 78.0845 58.4012 77.853C58.7487 77.4014 59.043 76.8963 59.2421 76.3295L77.497 26.1892C78.5479 23.2992 77.0557 20.1044 74.1651 19.0533Z" fill="#1DB954"/>
                            <path d="M47.6373 58.9244V50.5791C47.6379 50.5803 47.6391 50.5814 47.6396 50.5814V49.5617C47.639 49.5617 47.6379 49.5605 47.6373 49.5595V34.2272C47.6379 34.2284 47.6391 34.2284 47.6396 34.2294V33.0841C47.639 33.0841 47.6379 33.0853 47.6379 33.0853L47.6373 5.56813C47.6354 2.49188 45.1459 0.00125 42.069 0H7.73477C4.65805 0 2.16602 2.49313 2.16602 5.56813V58.9244C2.16602 61.9994 4.65789 64.4914 7.73477 64.4925H42.0691C45.1459 64.4914 47.6354 62.0006 47.6373 58.9244ZM4.8982 58.9244V5.56813C4.90242 4.00141 6.16867 2.73516 7.73477 2.73172H42.0691C43.6352 2.73516 44.9016 4.00266 44.9055 5.56813V58.9244C44.9015 60.4897 43.6352 61.7572 42.0691 61.7597H7.73477C6.16867 61.7573 4.90242 60.4909 4.8982 58.9244Z" fill="#1DB954"/>
                            <path d="M75.9991 19.0533L49.4736 9.40564V12.3061L75.0645 21.6186C75.3591 21.7233 75.6103 21.8699 75.8427 22.0597C75.9573 22.1435 76.073 22.2483 76.168 22.353C76.8717 23.1003 77.1347 24.2141 76.7675 25.2547L58.5119 75.395C57.9764 76.865 56.3464 77.6227 54.8758 77.0863L22.6122 65.3469C22.1286 65.1688 21.7189 64.8744 21.4139 64.4961H18.3242C18.8497 66.0302 20.0369 67.3128 21.6762 67.9122L53.94 79.6606C55.9897 80.4067 58.1755 79.8819 59.6578 78.4839C59.868 78.2942 60.0569 78.0845 60.2352 77.853C60.5827 77.4014 60.877 76.8963 61.0761 76.3295L79.3309 26.1892C80.3819 23.2992 78.8897 20.1044 75.9991 19.0533Z" fill="#1DB954"/>
                            <path d="M49.4712 58.9244V50.5791C49.4719 50.5803 49.4731 50.5814 49.4736 50.5814V49.5617C49.473 49.5617 49.4719 49.5605 49.4712 49.5595V34.2272C49.4719 34.2284 49.4731 34.2284 49.4736 34.2294V33.0841C49.473 33.0841 49.4719 33.0853 49.4719 33.0853L49.4712 5.56813C49.4694 2.49188 46.9798 0.00125 43.903 0H9.56875C6.49203 0 4 2.49313 4 5.56813V58.9244C4 61.9994 6.49187 64.4914 9.56875 64.4925H43.9031C46.9798 64.4914 49.4694 62.0006 49.4712 58.9244ZM6.73219 58.9244V5.56813C6.73641 4.00141 8.00266 2.73516 9.56875 2.73172H43.9031C45.4692 2.73516 46.7356 4.00266 46.7395 5.56813V58.9244C46.7355 60.4897 45.4692 61.7572 43.9031 61.7597H9.56875C8.00266 61.7573 6.73641 60.4909 6.73219 58.9244Z" fill="#1DB954"/>
                        </svg>
                        </div>

                        <div className="caption">
                            Draft Your Playlist
                        </div>

                        <div className="paragraph">
                            Choose between two tracks to build your perfect playlist.
                        </div>

                        <div className="arrow-icon">
                            <Link to="/#">
                                <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.698 15.375L14.0313 3.475L17.0001 0.5L33.6667 17.5L17.0001 34.5L14.0313 31.525L25.698 19.625L0.333412 19.625V15.375L25.698 15.375Z" fill="#1DB954"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid-item item2">Square 2</div>
                <div className="grid-item item3">Square 3</div>
                <div className="grid-item item4"><div className="content">
                        <div className="icon">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M67.7438 77.829C67.7456 77.8206 67.7392 77.8127 67.7306 77.8126C67.6346 77.8114 67.5391 77.8009 67.4457 77.7812C67.3426 77.7595 67.2759 77.6638 67.2759 77.5584V43.4068C67.2759 43.1198 67.4603 42.8491 67.7473 42.8488C70.5683 42.8488 73.4312 42.6078 73.3173 39.7891L73.3062 39.5158C73.3062 32.1269 71.2787 26.0127 67.939 21.173C67.1417 20.0177 65.715 19.5535 64.3932 19.0811C63.6911 18.8302 63.0566 18.4369 62.5349 17.9294L62.0635 17.4737C56.0817 11.9143 47.8265 9.40808 39.6752 9.5513C31.5239 9.69451 23.4003 12.5002 17.8067 17.5258L17.3492 17.9424C16.7712 18.4913 16.0595 18.8996 15.2757 19.1321C13.8239 19.5628 12.2388 19.9889 11.3854 21.24C8.09046 26.0707 6.09268 32.1691 6.09268 39.5483L6.01004 41.8918C5.93056 44.1459 8.72318 44.9022 10.6005 43.6521C11.7377 42.8948 12.7052 43.987 12.7052 45.3532V69.6573C12.7052 74.1358 8.78134 77.111 6.08781 73.533C4.39594 71.2856 3.12408 68.5884 2.37059 66.5751C2.18846 66.0885 1.72938 65.7566 1.20978 65.7566C0.54164 65.7566 3.70495e-06 65.215 3.70495e-06 64.5469V39.5483C-0.00354803 31.8204 2.54663 24.3039 7.26395 18.0224C8.23043 16.7355 8.40317 15.0018 8.80876 13.4443C9.02856 12.6002 9.48899 11.8282 10.1406 11.2113L10.8337 10.5929C18.2711 3.91384 28.8484 0.203271 39.5088 0.00797794C50.1693 -0.187315 61.1694 3.19776 69.2236 10.7231L69.8544 11.3285C70.4805 11.9387 70.9222 12.6946 71.1342 13.5184C71.526 15.0411 71.7043 16.7292 72.6499 17.9854C77.3812 24.2713 79.9404 31.7971 79.9395 39.5353V64.8684C79.9395 65.359 79.5419 65.7566 79.0513 65.7566C78.6673 65.7566 78.3291 66.001 78.2 66.3626C76.7177 70.5113 72.9271 77.8294 67.7571 77.8452C67.7485 77.8453 67.742 77.8374 67.7438 77.829ZM63.9003 73.7618C63.9003 77.207 61.1074 80 57.6621 80C57.0236 80 56.4111 79.7622 55.9589 79.3388C55.5068 78.9154 55.2518 78.3408 55.25 77.7411V42.7446C55.2518 42.1443 55.5065 41.5691 55.9585 41.1446C56.4105 40.7201 57.0229 40.4809 57.6621 40.4792C61.1074 40.4792 63.9003 43.2722 63.9003 46.7174V73.7618ZM16.0739 40.4792H22.8735C23.5121 40.4826 24.1236 40.7224 24.5751 41.1465C25.0267 41.5706 25.282 42.1448 25.2857 42.7446V77.7411C25.282 78.3403 25.0265 78.9138 24.5747 79.3369C24.1229 79.76 23.5115 79.9983 22.8735 80C19.099 80 16.0392 76.9402 16.0392 73.1657V40.5139C16.0392 40.4947 16.0547 40.4792 16.0739 40.4792Z" fill="#1DB954"/>
                            </svg>
                        </div>

                        <div className="caption">
                        Mood Playlists
                        </div>

                        <div className="paragraph">
                        Get playlist suggestions based on your listening habits.
                        </div>

                        <div className="arrow-icon">
                            <Link to="/#">
                                <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.698 15.375L14.0313 3.475L17.0001 0.5L33.6667 17.5L17.0001 34.5L14.0313 31.525L25.698 19.625L0.333412 19.625V15.375L25.698 15.375Z" fill="#1DB954"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className="explore-btn">Explore All Features &nbsp; 
                <svg className="explore-arrow" width="20" height="20" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.4375 18.0388L16.4375 3.76429L20 0.195667L40 20.5878L20 40.98L16.4375 37.4114L30.4375 23.1368L0 23.1368V18.0388L30.4375 18.0388Z" fill="#fff"/>
                </svg>
            </button>
        </div>
    </div>
    );
}