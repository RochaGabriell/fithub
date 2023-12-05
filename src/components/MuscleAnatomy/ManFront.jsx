import PropTypes from 'prop-types'

const ManFront = ({ width, height, handleMuscle }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 322 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="man-front">
          <g id="Body_x5F_base">
            <path
              id="Vector"
              d="M261.649 196.883C262.04 198.318 266.526 240.699 267.234 245.499C267.295 250.175 267.456 253.714 267.778 254.841C268.671 257.966 270.801 259.867 274.809 275.279C275.049 278.229 275.121 280.657 275.036 282.1C274.757 286.842 275.684 328.231 275.94 339.354C275.94 339.354 275.943 341.114 275.964 341.577C275.964 341.577 276.81 354.359 278.262 356.94C278.262 356.94 285.52 362.101 287.455 363.553C289.391 365.004 296.81 371.295 297.294 372.101C297.778 372.908 299.23 378.553 300.52 380.811C301.81 383.069 308.746 390.972 311.326 392.263C311.326 392.263 311.165 394.359 309.875 395.327C308.584 396.295 304.875 395.972 302.133 395.005C299.391 394.037 295.842 390.005 295.681 388.714C295.52 387.424 292.778 382.746 291.488 381.94C290.197 381.134 289.391 382.746 289.391 382.746L290.197 396.295V424.844C290.197 424.844 289.229 427.747 288.423 428.07C287.617 428.392 285.52 429.36 283.423 426.295C283.423 426.295 283.262 431.618 282.939 433.07C282.617 434.521 281.004 435.328 279.713 435.328C278.423 435.328 276.971 434.521 276.649 433.07C276.326 431.618 275.52 425.973 275.52 425.973C275.52 425.973 275.681 431.134 275.197 431.618C274.713 432.102 271.165 433.715 269.552 429.037C267.939 424.36 265.52 407.586 265.52 407.586L265.036 405.327L265.52 420.489C265.52 420.489 264.713 423.07 263.423 423.392C262.132 423.715 260.52 423.553 259.713 417.908C258.907 412.263 257.455 403.553 257.455 403.553L255.358 395.489C255.358 395.489 254.229 386.134 253.907 382.746C253.584 379.359 253.423 368.553 253.745 366.295C254.068 364.036 254.874 359.359 254.874 358.553C254.874 358.553 254.981 352.478 254.351 348.693C254.351 348.693 243.423 311.455 239.229 303.229C235.036 295.003 235.358 275.124 235.358 275.124C235.277 274.318 235.09 273.176 235.09 273.176L234.767 262.257V260.537C234.638 259.637 234.054 255.697 233.343 253.067C232.536 250.082 227.536 228.873 227.536 228.873C227.536 228.873 225.735 223.55 225.628 218.389C225.586 216.436 225.054 215.994 224.406 216.197C223.724 225.836 220.843 228.126 220.843 228.126C220.843 230.904 219.875 234.454 219.875 234.454C219.821 234.538 219.758 234.61 219.702 234.693C219.622 235.365 219.508 236.293 219.367 237.294C218.813 247.581 215.198 254.516 215.198 254.516C213.585 259.917 212.94 272.263 212.94 272.263C214.875 276.656 215.319 281.897 215.319 281.897C215.615 283.729 216.584 293.733 216.61 296.091C216.61 296.091 218.608 301.599 219.363 305.116C220.953 308.581 228.135 326.106 233.509 370.345C241.251 434.081 222.641 479.118 221.044 483.253C219.45 487.389 218.54 492.797 218.142 493.885C218.051 494.137 217.964 494.623 217.86 495.166C217.733 499.401 217.563 505.294 217.563 506.241C217.563 507.747 215.843 529.683 215.843 529.683L215.852 530.048C217.688 544.447 217.637 573.305 216.902 579.878C216.142 586.68 206.444 628.286 206.444 628.286C206.444 628.286 204.137 638.881 201.973 648.024C200.855 654.674 199.875 661.25 199.875 663.878C199.875 670.008 199.875 677.266 199.069 679.846C199.069 679.846 198.424 688.395 199.875 691.621C201.327 694.847 206.004 701.46 205.359 705.815C204.714 710.169 203.262 710.492 203.262 710.492C203.262 710.492 202.779 711.46 201.004 711.46C199.23 711.46 197.133 711.137 197.133 711.137C197.133 711.137 193.585 711.944 192.133 711.298C192.133 711.298 188.907 711.782 187.133 710.815C187.133 710.815 183.424 712.266 180.198 710.976C180.198 710.976 176.649 713.234 168.262 711.46C168.262 711.46 166.81 710.653 166.165 707.911C166.165 707.911 164.714 707.105 165.036 703.556C165.359 700.008 170.52 692.911 171.327 683.879C172.133 674.846 173.262 668.072 173.262 668.072C173.262 668.072 174.714 663.233 175.359 661.136C176.004 659.04 177.396 649.801 177.587 644.984C177.587 644.984 174.076 604.103 172.852 595.75C171.627 587.396 171.725 558.993 177.737 533.958C178.03 531.902 178.038 527.977 178.038 527.977C178.038 527.977 173.857 502.125 173.87 497.284C173.898 486.94 169.129 442.564 168.52 433.223C167.911 423.883 168.054 374.723 168.054 374.723C167.523 374.589 167.537 374.035 165.279 373.47C163.719 373.255 162.538 373.47 162.538 373.47C160.28 374.035 160.294 374.589 159.763 374.723C159.763 374.723 159.906 423.883 159.297 433.223C158.688 442.564 153.919 486.942 153.947 497.284C153.96 502.125 149.779 527.977 149.779 527.977C149.779 527.977 149.719 532.104 150.08 533.958C156.09 558.992 156.188 587.396 154.965 595.75C153.741 604.105 150.23 644.984 150.23 644.984C150.421 649.799 151.813 659.04 152.458 661.136C153.103 663.233 154.555 668.072 154.555 668.072C154.555 668.072 155.684 674.846 156.49 683.879C157.297 692.911 162.458 700.008 162.781 703.556C163.103 707.105 161.652 707.911 161.652 707.911C161.007 710.653 159.555 711.46 159.555 711.46C151.168 713.234 147.619 710.976 147.619 710.976C144.394 712.266 140.684 710.815 140.684 710.815C138.91 711.782 135.684 711.298 135.684 711.298C134.232 711.944 130.684 711.137 130.684 711.137C130.684 711.137 128.587 711.46 126.813 711.46C125.039 711.46 124.555 710.492 124.555 710.492C124.555 710.492 123.103 710.169 122.458 705.815C121.813 701.46 126.49 694.847 127.942 691.621C129.393 688.395 128.748 679.846 128.748 679.846C127.942 677.266 127.942 670.008 127.942 663.878C127.942 661.25 126.962 654.674 125.844 648.024C123.679 638.881 121.373 628.286 121.373 628.286C121.373 628.286 111.675 586.68 110.915 579.878C110.18 573.305 110.129 544.447 111.965 530.048L111.974 529.683C111.974 529.683 110.254 507.747 110.254 506.241C110.254 505.294 110.084 499.401 109.957 495.166C109.853 494.623 109.766 494.137 109.675 493.885C109.277 492.797 108.367 487.389 106.773 483.253C105.178 479.118 86.566 434.081 94.308 370.345C99.6822 326.106 106.863 308.581 108.454 305.116C109.209 301.599 111.207 296.091 111.207 296.091C111.233 293.733 112.202 283.729 112.498 281.897C112.498 281.897 112.942 276.655 114.877 272.263C114.877 272.263 114.232 259.917 112.619 254.516C112.619 254.516 109.004 247.581 108.45 237.294C108.309 236.293 108.193 235.364 108.115 234.693C108.059 234.61 107.996 234.538 107.942 234.454C107.942 234.454 106.974 230.904 106.974 228.126C106.974 228.126 104.093 225.836 103.411 216.197C102.764 215.994 102.229 216.436 102.189 218.389C102.082 223.55 100.281 228.873 100.281 228.873C100.281 228.873 95.2809 250.084 94.4744 253.067C93.7635 255.697 93.1789 259.637 93.0499 260.537V262.257L92.7273 273.176C92.7273 273.176 92.5389 274.318 92.4589 275.124C92.4589 275.124 92.7815 295.003 88.5879 303.229C84.3944 311.455 73.4665 348.693 73.4665 348.693C72.8356 352.476 72.9427 358.553 72.9427 358.553C72.9427 359.359 73.7491 364.036 74.0717 366.295C74.3943 368.553 74.233 379.359 73.9104 382.746C73.5878 386.134 72.4588 395.489 72.4588 395.489L70.362 403.553C70.362 403.553 68.9104 412.263 68.1039 417.908C67.2975 423.553 65.6845 423.715 64.3942 423.392C63.1039 423.07 62.2974 420.489 62.2974 420.489L62.7813 405.327L62.2974 407.586C62.2974 407.586 59.878 424.36 58.2651 429.037C56.6522 433.715 53.1038 432.102 52.6199 431.618C52.136 431.134 52.2973 425.973 52.2973 425.973C52.2973 425.973 51.4909 431.618 51.1683 433.07C50.8457 434.521 49.3941 435.328 48.1038 435.328C46.8134 435.328 45.2005 434.521 44.8779 433.07C44.5553 431.618 44.3941 426.295 44.3941 426.295C42.2973 429.36 40.2005 428.392 39.394 428.07C38.5876 427.747 37.6198 424.844 37.6198 424.844V396.295L38.4263 382.746C38.4263 382.746 37.6198 381.134 36.3295 381.94C35.0391 382.746 32.2972 387.424 32.1359 388.714C31.9746 390.005 28.4262 394.037 25.6842 395.005C22.9423 395.972 19.2326 396.295 17.9422 395.327C16.6519 394.359 16.4906 392.263 16.4906 392.263C19.0713 390.972 26.0068 383.069 27.2971 380.811C28.5875 378.553 30.0391 372.908 30.523 372.101C31.0069 371.295 38.4263 365.004 40.3618 363.553C42.2973 362.101 49.5554 356.94 49.5554 356.94C51.007 354.359 51.8535 341.577 51.8535 341.577C51.8741 341.114 51.8767 339.354 51.8767 339.354C52.1335 328.231 53.0599 286.842 52.7812 282.1C52.6961 280.657 52.7696 278.229 53.0083 275.279C57.0148 259.867 59.1464 257.966 60.0393 254.841C60.3619 253.714 60.5232 250.175 60.5826 245.499C61.291 240.699 65.7762 198.318 66.1684 196.883C66.3026 196.426 66.9207 193.187 66.9207 193.187C66.4071 186.085 66.0794 169.128 67.2433 162.146C68.3788 155.337 75.2007 139.349 85.0924 136.016C85.0924 136.016 85.2989 135.962 85.6666 135.89C89.806 131.303 95.2009 130.162 95.2009 130.162C95.2009 130.162 98.9106 128.065 102.62 125.807C106.33 123.549 112.909 118.144 114.878 116.775C126.298 108.838 132.984 105.587 137.271 103.353C138.068 102.341 138.772 101.154 139.126 99.8389C140.255 95.6453 138.643 80.9677 138.643 80.9677C137.675 79.1935 137.03 71.1288 137.03 71.1288C137.03 71.1288 136.303 63.0642 135.739 60.3222C134.75 55.517 134.094 50.7285 133.965 49.273C133.4 42.9013 133.239 37.8212 133.481 33.8689C133.717 30.0043 135.255 22.0946 143.804 13.546C151.92 5.42979 162.779 5.16527 163.858 5.15881C163.858 5.15881 163.897 5.15881 163.912 5.15881C163.928 5.15881 163.967 5.15881 163.967 5.15881C165.044 5.16527 175.903 5.4285 184.021 13.546C192.569 22.0946 194.107 30.0043 194.344 33.8689C194.586 37.8212 194.425 42.9013 193.86 49.273C193.731 50.7272 193.075 55.517 192.086 60.3222C191.52 63.0642 190.795 71.1288 190.795 71.1288C190.795 71.1288 190.15 79.1935 189.182 80.9677C189.182 80.9677 187.569 95.6453 188.698 99.8389C189.005 100.978 189.577 102.017 190.242 102.933C194.727 105.572 202.122 109.558 212.944 116.775C214.939 118.105 221.492 123.549 225.202 125.807C228.912 128.065 232.621 130.162 232.621 130.162C232.621 130.162 238.016 131.303 242.156 135.89C242.523 135.963 242.73 136.016 242.73 136.016C252.623 139.349 259.443 155.337 260.579 162.146C261.743 169.128 261.415 186.085 260.902 193.187C260.896 193.186 261.218 195.7 261.649 196.883Z"
              fill="white"
              stroke="#BF4242"
              // stroke-miterlimit="10"
            />
          </g>
          <g id="Body_male_front">
            <path
              id="peito"
              d="M101.569 176.163C109.311 209.256 132.753 203.776 132.753 203.776C150.602 201.718 158.13 196.774 158.13 196.774C166.302 191.827 157.485 151.612 155.334 146.376C154.86 145.222 154.043 143.274 152.947 141.59C151.801 139.833 151.641 139.812 149.045 139.403C147.252 139.122 145.473 139.099 143.66 139.136C135.103 139.323 125.299 139.97 118.062 144.459C114.603 146.603 111.162 149.241 108.489 152.273C106.373 154.674 104.848 156.602 103.183 159.305C103.181 159.305 99.4182 169.544 101.569 176.163Z"
              fill="#BF4242"
            />
            <path
              id="deltoidePosterior"
              d="M85.2243 136.875C85.2243 136.875 90.4927 135.477 96.5148 137.204C96.5148 137.204 124.257 136.881 128.558 136.343C128.558 136.343 101.031 144.73 97.1599 170.753C97.1599 170.753 96.0851 178.386 94.5792 180.86C93.0734 183.334 81.4074 191.263 69.0408 218.039C69.0408 218.039 68.0188 199.78 67.3736 196.984C66.7285 194.188 65.9762 171.393 67.3736 163.006C68.5091 156.195 75.3312 140.208 85.2243 136.875Z"
              fill="#BF4242"
            />
            <path
              id="triceps"
              d="M66.2988 197.743C66.2988 197.743 67.6962 219.032 68.0188 220.429C68.0188 220.429 66.8898 221.667 66.7285 222.743C66.5672 223.818 63.7182 239.948 62.4278 255.592C62.4278 255.592 60.1697 249.248 60.6536 246.748C61.1375 244.249 65.8962 199.22 66.2988 197.743Z"
              fill="#BF4242"
            />
            <path
              id="triceps_2"
              d="M93.1545 261.586C93.1545 261.586 87.348 256.182 87.5893 252.392C87.5893 252.392 87.2667 251.666 88.3957 249.973C89.5248 248.28 99.4449 232.715 100.413 229.73C100.413 229.73 95.4126 250.941 94.6061 253.924C93.7997 256.907 93.1545 261.586 93.1545 261.586Z"
              fill="#BF4242"
            />
            <path
              id="flexoresDedos"
              d="M68.8795 271.909C68.8795 271.909 69.4717 269.717 71.4601 268.684C73.4769 267.634 77.9118 263.28 77.9118 263.28C77.9118 263.28 82.7506 270.376 92.5894 275.376C92.5894 275.376 92.912 295.86 88.7184 304.086C84.5248 312.312 73.584 349.57 73.584 349.57C73.584 349.57 64.4459 351.654 58.6639 351.076C54.3632 350.646 52.4277 349.57 52.4277 349.57C52.4277 349.57 55.0084 333.441 56.9439 327.635C58.8794 321.828 71.6214 290.942 68.8795 271.909Z"
              fill="#BF4242"
            />
            <path
              id="serratilAnterior"
              d="M103.557 186.236C103.557 186.236 104.686 203.829 126.461 208.922L125.332 210.774C125.332 210.774 128.396 218.027 126.622 222.657C124.848 227.287 122.912 227.597 122.912 227.597C122.912 227.597 126.783 232.533 126.945 236.856C127.106 241.177 126.299 243.801 124.203 244.727C124.203 244.727 113.235 243.339 108.073 235.313C108.073 235.313 107.106 231.763 107.106 228.986C107.106 228.986 103.396 226.053 103.396 212.781C103.396 212.781 102.912 211.854 102.589 209.693C102.267 207.532 100.493 197.347 103.557 186.236Z"
              fill="#BF4242"
            />
            <path
              id="obliquoExterno"
              d="M108.558 237.781C108.558 237.781 113.396 243.339 123.719 246.116C123.719 246.116 128.235 249.819 128.235 254.912C128.235 260.004 127.106 262.32 126.138 262.627C126.138 262.627 129.526 267.412 129.364 271.268C129.203 275.127 128.074 278.214 125.332 278.678C125.332 278.678 117.913 276.98 115.009 273.12C115.009 273.12 114.364 260.774 112.751 255.373C112.751 255.375 109.041 248.276 108.558 237.781Z"
              fill="#BF4242"
            />
            <path
              id="obliquoExterno_2"
              d="M114.418 275.699C114.418 275.699 116.138 278.257 127.59 281.828C127.59 281.828 130.977 283.775 130.815 289.779C130.654 295.782 131.622 314.535 134.041 320.377C134.041 320.377 118.664 308.02 111.729 297.312C111.729 297.312 112.912 281.895 113.235 279.785C113.557 277.676 113.343 277.634 114.418 275.699Z"
              fill="#BF4242"
            />
            <path
              id="retoAbdominal"
              d="M161.139 205.064C161.139 205.064 162.913 207.687 162.913 209.386C162.913 211.083 162.913 221.115 162.913 221.115C162.913 221.115 162.752 223.584 160.01 225.282C157.268 226.98 137.751 235.313 136.461 236.547C135.171 237.781 132.429 238.708 131.461 237.628C130.493 236.547 129.526 234.233 129.526 229.912C129.526 225.59 128.558 214.634 135.493 209.078C142.429 203.522 157.913 203.675 161.139 205.064Z"
              fill="#BF4242"
            />
            <path
              id="retoAbdominal_2"
              d="M161.462 232.071C161.462 232.071 160.978 229.293 158.397 228.83C155.817 228.367 150.01 231.916 150.01 231.916L134.365 240.559C134.365 240.559 133.074 241.021 132.429 241.021C131.784 241.021 131.945 247.657 131.945 248.584C131.945 249.509 131.945 252.75 133.074 254.293C134.203 255.837 139.365 252.75 141.462 251.979C143.558 251.207 153.881 248.891 158.236 249.355C162.591 249.817 162.268 245.806 162.268 245.806C162.268 245.806 162.591 235.003 161.462 232.071Z"
              fill="#BF4242"
            />
            <path
              id="retoAbdominal_3"
              d="M155.816 251.515C155.816 251.515 161.461 251.054 162.267 254.139C163.074 257.226 162.59 264.788 162.429 266.176C162.267 267.566 159.203 272.349 155.977 273.584C152.751 274.819 144.525 273.584 137.751 274.973C137.751 274.973 134.202 276.054 134.041 272.813C133.88 269.571 132.751 259.695 133.719 258.46C134.686 257.225 147.267 252.134 155.816 251.515Z"
              fill="#BF4242"
            />
            <path
              id="retoAbdominal_4"
              d="M155.01 276.056C155.01 276.056 161.3 279.71 161.462 282.798C161.623 285.886 161.784 311.901 161.784 320.379C161.784 326.831 162.536 359.863 161.462 361.508C161.462 361.508 156.945 360.89 155.01 360.48C153.074 360.067 149.643 355.346 149.042 354.089C147.268 350.379 139.687 332.96 136.3 317.314C135.346 312.907 132.59 290.866 133.881 285.928C135.171 280.99 136.032 276.874 138.397 276.669C140.762 276.464 152.483 276.883 155.01 276.056Z"
              fill="#BF4242"
            />
            <path
              id="gastrocnemio"
              d="M150.212 534.818C150.212 534.818 149.985 542.233 146.3 546.638C142.615 551.043 138.074 555.702 136.784 566.348C135.409 577.688 141.139 621.671 150.362 645.841C150.362 645.841 153.873 604.961 155.097 596.607C156.322 588.256 156.222 559.851 150.212 534.818Z"
              fill="#BF4242"
            />
            <path
              id="tibialAnterior"
              d="M116.634 524.711C116.634 524.711 123.88 533.283 126.945 546.025C128.949 554.359 147.494 665.724 147.494 665.724C147.494 665.724 145.442 669.535 140.354 656.47C135.268 643.405 125.575 612.125 123.809 606.585C122.042 601.043 117.025 585.721 115.956 567.939C114.888 550.157 112.755 524.916 116.634 524.711Z"
              fill="#BF4242"
            />
            <path
              id="peronioLongo"
              d="M133.253 645.961C133.253 645.961 139.938 670.049 136 672.186C132.062 674.325 130.678 666.861 128.354 658.398C126.03 649.934 121.503 629.141 121.503 629.141C121.503 629.141 111.805 587.535 111.045 580.735C110.285 573.934 110.255 543.273 112.293 529.458C112.293 529.458 111.459 567.192 115.501 582.808C119.541 598.423 133.253 645.961 133.253 645.961Z"
              fill="#BF4242"
            />
            <path
              id="esternocleidomastoideo"
              d="M139.23 80.9971C139.23 80.9971 140.45 104.169 140.776 106.73C141.101 109.293 141.752 129.446 140.125 131.837C140.125 131.837 145.441 129.902 149.238 129.788C150.538 129.749 155.258 130.3 160.138 134.913C160.138 134.913 162.58 136.193 163.067 135.853C163.555 135.511 155.638 116.695 154.525 112.88C150.893 100.42 150.431 93.068 149.454 91.5313C148.478 89.9932 139.88 82.8758 139.23 80.9971Z"
              fill="#BF4242"
            />
            <path
              id="trapezio"
              d="M138.688 101.988C139.084 105.97 139.374 110.016 139.568 114.017C139.723 117.225 139.488 120.413 139.405 123.618C139.347 125.865 139.871 128.869 138.351 130.753C135.462 134.332 127.965 133.683 123.966 133.711C118.929 133.748 113.888 133.826 108.851 133.904C104.098 133.976 99.7313 130.753 94.957 130.753C94.957 130.753 98.7196 128.656 102.806 126.398C106.893 124.14 113.648 118.494 115.602 116.882C117.557 115.269 134.956 104.085 138.688 101.988Z"
              fill="#BF4242"
            />
            <path
              id="bicepsBraquial"
              d="M99.9559 226.232C101.999 216.448 101.783 190.866 98.1275 179.14C98.1275 179.14 97.7985 179.042 97.0295 179.873L97.0527 179.784C97.0527 179.784 95.1172 182.365 92.4294 184.839C89.7416 187.312 77.9131 201.397 68.1285 222.581C68.1285 222.581 64.6872 238.383 63.2897 257.845C63.2897 257.845 64.6072 262.069 68.9892 269.35C68.9892 269.35 75.655 263.438 77.4834 262.039C77.4834 262.039 78.3234 261.614 79.0409 261.914C81.6835 267.617 92.8604 274.033 92.8604 274.033L93.183 263.113C93.183 263.113 85.6551 256.876 86.5158 251.822C87.3752 246.771 97.912 236.017 99.9559 226.232Z"
              fill="#BF4242"
            />
            <path
              id="sartorioAbdutores"
              d="M154.079 498.146C154.051 487.803 158.82 443.425 159.429 434.086C160.038 424.744 159.257 374.628 159.257 374.628C146.515 366.886 137.912 337.799 132.751 329.251C130.484 325.496 123.235 318.283 120.755 316.393C119.303 315.287 117.039 313.951 116.031 312.692C113.88 310.004 111.46 302.368 111.46 302.368C108.88 305.165 109.915 307.968 112.106 319.359C113.18 324.95 113.396 329.251 115.116 331.186C135.835 354.493 138.498 378.694 141.783 391.832C143.719 399.574 147.066 430.654 149.364 448.069C150.116 453.769 151.245 465.38 151.315 478.574C151.031 497.639 146.546 500.911 146.035 502.58C145.497 504.336 143.916 513.809 145.638 520.801C147.36 527.792 149.91 528.839 149.91 528.839C149.91 528.839 154.092 502.987 154.079 498.146Z"
              fill="#BF4242"
            />
            <path
              id="quadriceps"
              d="M141.354 399.356C141.354 399.356 145.493 435.915 147.215 448.819C148.566 458.95 154.991 501.727 139.207 504.254C129.318 502.268 126.085 494.196 124.795 491.184C123.505 488.175 119.204 483.228 119.204 483.228C111.247 477.636 109.444 471.499 109.444 471.499C102.825 455.803 96.6814 418.744 100.71 371.533C100.71 371.533 102.487 364.151 104.151 360.649C109.091 350.247 112.968 337.208 114.258 333.551C114.258 333.551 130.602 343.868 141.354 399.356Z"
              fill="#BF4242"
            />
            <path
              id="braquiorradial"
              d="M68.0731 270.215C63.9891 264.09 61.673 257.629 60.4691 253.451C60.3891 254.5 60.291 255.273 60.1697 255.699C59.2768 258.824 57.1465 260.724 53.1387 276.136C52.8987 279.086 52.8264 281.515 52.9116 282.957C53.2342 288.441 51.9438 342.957 51.9438 342.957C53.0729 334.409 62.4278 309.247 65.6537 294.57C68.8795 279.892 68.0731 270.215 68.0731 270.215Z"
              fill="#BF4242"
            />
            <path
              id="abdutores"
              d="M107.89 307.877C107.89 307.877 110.637 326.195 110.645 331.199C110.653 336.2 110.129 340.138 109.249 342.532C108.367 344.925 100.265 364.525 98.4305 371.73C96.5956 378.936 92.6679 461.544 113.66 485.637C113.66 485.637 113.996 495.761 111.722 499.778C109.447 503.797 110.006 498.558 109.793 497.421C109.148 493.98 108.525 489.887 107.428 485.593C106.138 480.54 87.1594 436.615 93.664 373.872C99.1479 320.993 107.89 307.877 107.89 307.877Z"
              fill="#BF4242"
            />
            <path
              id="peito_2"
              d="M226.375 176.163C218.633 209.256 195.191 203.776 195.191 203.776C177.342 201.718 169.814 196.774 169.814 196.774C161.643 191.827 170.459 151.612 172.61 146.376C173.084 145.222 173.901 143.274 174.998 141.59C176.143 139.833 176.303 139.812 178.9 139.403C180.692 139.122 182.471 139.099 184.284 139.136C192.842 139.323 202.646 139.97 209.882 144.459C213.341 146.603 216.783 149.241 219.455 152.273C221.571 154.674 223.096 156.602 224.761 159.305C224.763 159.305 228.526 169.544 226.375 176.163Z"
              fill="#BF4242"
            />
            <path
              id="deltoidePosterior_2"
              d="M242.721 136.875C242.721 136.875 237.452 135.477 231.43 137.204C231.43 137.204 203.688 136.881 199.387 136.343C199.387 136.343 226.914 144.73 230.785 170.753C230.785 170.753 231.86 178.386 233.366 180.86C234.871 183.334 246.537 191.263 258.904 218.039C258.904 218.039 259.926 199.78 260.571 196.984C261.216 194.188 261.969 171.393 260.571 163.006C259.434 156.195 252.614 140.208 242.721 136.875Z"
              fill="#BF4242"
            />
            <path
              id="triceps_3"
              d="M261.645 197.743C261.645 197.743 260.248 219.032 259.925 220.429C259.925 220.429 261.054 221.667 261.215 222.743C261.377 223.818 264.226 239.948 265.516 255.592C265.516 255.592 267.774 249.248 267.29 246.748C266.806 244.249 262.048 199.22 261.645 197.743Z"
              fill="#BF4242"
            />
            <path
              id="triceps_4"
              d="M234.79 261.586C234.79 261.586 240.596 256.182 240.355 252.392C240.355 252.392 240.677 251.666 239.548 249.973C238.419 248.28 228.499 232.715 227.532 229.73C227.532 229.73 232.532 250.941 233.338 253.924C234.144 256.907 234.79 261.586 234.79 261.586Z"
              fill="#BF4242"
            />
            <path
              id="flexoresDedos_2"
              d="M259.064 271.909C259.064 271.909 258.472 269.717 256.484 268.684C254.467 267.634 250.032 263.28 250.032 263.28C250.032 263.28 245.193 270.376 235.354 275.376C235.354 275.376 235.032 295.86 239.225 304.086C243.419 312.312 254.36 349.57 254.36 349.57C254.36 349.57 263.498 351.654 269.28 351.076C273.581 350.646 275.516 349.57 275.516 349.57C275.516 349.57 272.935 333.441 271 327.635C269.064 321.828 256.322 290.942 259.064 271.909Z"
              fill="#BF4242"
            />
            <path
              id="serratilAnterior_2"
              d="M224.387 186.236C224.387 186.236 223.258 203.829 201.483 208.922L202.612 210.774C202.612 210.774 199.548 218.027 201.322 222.657C203.096 227.287 205.032 227.597 205.032 227.597C205.032 227.597 201.161 232.533 200.999 236.856C200.838 241.177 201.645 243.801 203.741 244.727C203.741 244.727 214.709 243.339 219.871 235.313C219.871 235.313 220.838 231.763 220.838 228.986C220.838 228.986 224.548 226.053 224.548 212.781C224.548 212.781 225.032 211.854 225.355 209.693C225.677 207.532 227.451 197.347 224.387 186.236Z"
              fill="#BF4242"
            />
            <path
              id="obliquoExterno_3"
              d="M219.387 237.781C219.387 237.781 214.548 243.339 204.225 246.116C204.225 246.116 199.709 249.819 199.709 254.912C199.709 260.004 200.838 262.32 201.806 262.627C201.806 262.627 198.419 267.412 198.58 271.268C198.741 275.127 199.87 278.214 202.612 278.678C202.612 278.678 210.032 276.98 212.935 273.12C212.935 273.12 213.58 260.774 215.193 255.373C215.193 255.375 218.903 248.276 219.387 237.781Z"
              fill="#BF4242"
            />
            <path
              id="obliquoExterno_4"
              d="M213.526 275.699C213.526 275.699 211.806 278.257 200.354 281.828C200.354 281.828 196.967 283.775 197.128 289.779C197.29 295.782 196.322 314.535 193.903 320.377C193.903 320.377 209.28 308.02 216.215 297.312C216.215 297.312 215.032 281.895 214.709 279.785C214.387 277.676 214.601 277.634 213.526 275.699Z"
              fill="#BF4242"
            />
            <path
              id="retoAbdominal_5"
              d="M166.805 205.064C166.805 205.064 165.031 207.687 165.031 209.386C165.031 211.083 165.031 221.115 165.031 221.115C165.031 221.115 165.192 223.584 167.934 225.282C170.676 226.98 190.193 235.313 191.483 236.547C192.773 237.781 195.515 238.708 196.483 237.628C197.451 236.547 198.419 234.233 198.419 229.912C198.419 225.59 199.386 214.634 192.451 209.078C185.515 203.522 170.031 203.675 166.805 205.064Z"
              fill="#BF4242"
            />
            <path
              id="retoAbdominal_6"
              d="M166.483 232.071C166.483 232.071 166.967 229.293 169.548 228.83C172.129 228.367 177.935 231.916 177.935 231.916L193.58 240.559C193.58 240.559 194.871 241.021 195.516 241.021C196.161 241.021 196 247.657 196 248.584C196 249.509 196 252.75 194.871 254.293C193.742 255.837 188.58 252.75 186.484 251.979C184.387 251.207 174.064 248.891 169.709 249.355C165.354 249.817 165.677 245.806 165.677 245.806C165.677 245.806 165.354 235.003 166.483 232.071Z"
              fill="#BF4242"
            />
            <path
              id="retoAbdominal_7"
              d="M172.128 251.515C172.128 251.515 166.483 251.054 165.676 254.139C164.87 257.226 165.354 264.788 165.515 266.176C165.676 267.566 168.741 272.349 171.967 273.584C175.192 274.819 183.418 273.584 190.193 274.973C190.193 274.973 193.741 276.054 193.902 272.813C194.064 269.571 195.193 259.695 194.225 258.46C193.257 257.225 180.676 252.134 172.128 251.515Z"
              fill="#BF4242"
            />
            <path
              id="retoAbdominal_8"
              d="M172.934 276.056C172.934 276.056 166.644 279.71 166.483 282.798C166.321 285.886 166.16 311.901 166.16 320.379C166.16 326.831 165.408 359.863 166.483 361.508C166.483 361.508 170.999 360.89 172.934 360.48C174.87 360.067 178.301 355.346 178.902 354.089C180.676 350.379 188.257 332.96 191.644 317.314C192.598 312.907 195.354 290.866 194.064 285.928C192.773 280.99 191.913 276.874 189.548 276.669C187.182 276.464 175.461 276.883 172.934 276.056Z"
              fill="#BF4242"
            />
            <path
              id="gastrocnemio_2"
              d="M177.731 534.818C177.731 534.818 177.958 542.233 181.644 546.638C185.329 551.043 189.869 555.702 191.16 566.348C192.534 577.688 186.805 621.671 177.582 645.841C177.582 645.841 174.071 604.961 172.846 596.607C171.623 588.256 171.721 559.851 177.731 534.818Z"
              fill="#BF4242"
            />
            <path
              id="tibialAnterior_2"
              d="M211.309 524.711C211.309 524.711 204.063 533.283 200.998 546.025C198.994 554.359 180.45 665.724 180.45 665.724C180.45 665.724 182.501 669.535 187.589 656.47C192.676 643.405 202.368 612.125 204.134 606.585C205.901 601.043 210.918 585.721 211.987 567.939C213.055 550.157 215.189 524.916 211.309 524.711Z"
              fill="#BF4242"
            />
            <path
              id="peronioLongo_2"
              d="M194.689 645.961C194.689 645.961 188.004 670.049 191.942 672.186C195.88 674.325 197.265 666.861 199.589 658.398C201.912 649.934 206.439 629.141 206.439 629.141C206.439 629.141 216.137 587.535 216.897 580.735C217.657 573.934 217.687 543.273 215.649 529.458C215.649 529.458 216.483 567.192 212.442 582.808C208.403 598.423 194.689 645.961 194.689 645.961Z"
              fill="#BF4242"
            />
            <path
              id="esternocleidomastoideo_2"
              d="M188.714 80.9971C188.714 80.9971 187.493 104.169 187.168 106.73C186.843 109.293 186.191 129.446 187.818 131.837C187.818 131.837 182.502 129.902 178.706 129.788C177.406 129.749 172.686 130.3 167.805 134.913C167.805 134.913 165.364 136.193 164.876 135.853C164.389 135.511 172.306 116.695 173.418 112.88C177.051 100.42 177.513 93.068 178.489 91.5313C179.466 89.9932 188.062 82.8758 188.714 80.9971Z"
              fill="#BF4242"
            />
            <path
              id="trapezio_2"
              d="M189.256 101.988C188.86 105.97 188.57 110.016 188.376 114.017C188.221 117.225 188.456 120.413 188.539 123.618C188.597 125.865 188.073 128.869 189.593 130.753C192.482 134.332 199.979 133.683 203.977 133.711C209.015 133.748 214.056 133.826 219.092 133.904C223.846 133.976 228.213 130.753 232.987 130.753C232.987 130.753 229.224 128.656 225.138 126.398C221.051 124.14 214.296 118.494 212.341 116.882C210.387 115.269 192.988 104.085 189.256 101.988Z"
              fill="#BF4242"
            />
            <path
              id="bicepsBraquial_2"
              d="M227.988 226.232C225.946 216.448 226.161 190.866 229.817 179.14C229.817 179.14 230.146 179.042 230.915 179.873L230.892 179.784C230.892 179.784 232.827 182.365 235.515 184.839C238.203 187.312 250.031 201.397 259.816 222.581C259.816 222.581 263.257 238.383 264.655 257.845C264.655 257.845 263.337 262.069 258.955 269.35C258.955 269.35 252.289 263.438 250.461 262.039C250.461 262.039 249.621 261.614 248.904 261.914C246.261 267.617 235.084 274.033 235.084 274.033L234.761 263.113C234.761 263.113 242.289 256.876 241.429 251.822C240.569 246.771 230.031 236.017 227.988 226.232Z"
              fill="#BF4242"
            />
            <path
              id="sartorioAbdutores_2"
              d="M173.865 498.146C173.893 487.803 169.124 443.425 168.515 434.086C167.906 424.744 168.687 374.628 168.687 374.628C181.429 366.886 190.031 337.799 195.193 329.251C197.46 325.496 204.709 318.283 207.189 316.393C208.641 315.287 210.905 313.951 211.913 312.692C214.064 310.004 216.483 302.368 216.483 302.368C219.064 305.165 218.029 307.968 215.838 319.359C214.763 324.95 214.548 329.251 212.828 331.186C192.109 354.493 189.446 378.694 186.16 391.832C184.225 399.574 180.878 430.654 178.58 448.069C177.827 453.769 176.698 465.38 176.629 478.574C176.913 497.639 181.398 500.911 181.909 502.58C182.447 504.336 184.028 513.809 182.306 520.801C180.584 527.792 178.034 528.839 178.034 528.839C178.034 528.839 173.852 502.987 173.865 498.146Z"
              fill="#BF4242"
            />
            <path
              id="quadriceps_2"
              d="M186.59 399.356C186.59 399.356 182.451 435.915 180.73 448.819C179.379 458.95 172.953 501.727 188.737 504.254C198.626 502.268 201.859 494.196 203.149 491.184C204.439 488.175 208.74 483.228 208.74 483.228C216.698 477.636 218.5 471.499 218.5 471.499C225.119 455.803 231.263 418.744 227.234 371.533C227.234 371.533 225.458 364.151 223.793 360.649C218.854 350.247 214.976 337.208 213.686 333.551C213.686 333.551 197.343 343.868 186.59 399.356Z"
              fill="#BF4242"
            />
            <path
              id="braquiorradial_2"
              d="M259.871 270.215C263.955 264.09 266.271 257.629 267.475 253.451C267.555 254.5 267.653 255.273 267.775 255.699C268.667 258.824 270.798 260.724 274.806 276.136C275.046 279.086 275.118 281.515 275.033 282.957C274.71 288.441 276 342.957 276 342.957C274.871 334.409 265.516 309.247 262.291 294.57C259.065 279.892 259.871 270.215 259.871 270.215Z"
              fill="#BF4242"
            />
            <path
              id="abdutores_2"
              d="M220.052 307.877C220.052 307.877 217.305 326.195 217.297 331.199C217.289 336.2 217.813 340.138 218.693 342.532C219.575 344.925 227.677 364.525 229.511 371.73C231.346 378.936 235.274 461.544 214.282 485.637C214.282 485.637 213.946 495.761 216.22 499.778C218.495 503.797 217.936 498.558 218.149 497.421C218.794 493.98 219.417 489.887 220.514 485.593C221.804 480.54 240.782 436.615 234.278 373.872C228.795 320.993 220.052 307.877 220.052 307.877Z"
              fill="#BF4242"
            />
          </g>
        </g>
      </svg>
    </>
  )
}

ManFront.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  handleMuscle: PropTypes.func
}

export default ManFront
