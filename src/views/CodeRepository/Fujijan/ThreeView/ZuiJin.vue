<template>
  <svg
    width="168"
    height="128"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <rect id="e" x="0" y="0" width="136" height="96" rx="3" />
      <rect id="a" x="24" y="21" width="90" height="10" rx="2" />
      <rect id="b" x="24" y="35" width="90" height="15" rx="2" />
      <rect id="c" x="24" y="7" width="50" height="10" rx="2" />
      <rect id="l" x="0" y="0" width="36" height="36" rx="2" />
      <mask
        id="f"
        maskContentUnits="userSpaceOnUse"
        maskUnits="objectBoundingBox"
        x="0"
        y="0"
        width="90"
        height="10"
        fill="#fff"
      >
        <use xlink:href="#a" />
      </mask>
      <mask
        id="g"
        maskContentUnits="userSpaceOnUse"
        maskUnits="objectBoundingBox"
        x="0"
        y="0"
        width="90"
        height="15"
        fill="#fff"
      >
        <use xlink:href="#b" />
      </mask>
      <mask
        id="h"
        maskContentUnits="userSpaceOnUse"
        maskUnits="objectBoundingBox"
        x="0"
        y="0"
        width="50"
        height="10"
        fill="#fff"
      >
        <use xlink:href="#c" />
      </mask>
      <filter
        x="-3.7%"
        y="-4.2%"
        width="107.4%"
        height="110.4%"
        filterUnits="objectBoundingBox"
        id="d"
      >
        <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="1.5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter
        x="-44.4%"
        y="-38.9%"
        width="188.9%"
        height="188.9%"
        filterUnits="objectBoundingBox"
        id="k"
      >
        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <path
        d="M4.104 1.465H.896c-.096 0-.15.101-.09.17l1.604 1.86a.122.122 0 00.18 0l1.604-1.86c.06-.069.006-.17-.09-.17z"
        id="i"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(16 16)">
        <use fill="#000" filter="url(#d)" xlink:href="#e" />
        <use fill="#F2F4F6" xlink:href="#e" />
      </g>
      <g transform="translate(16 16)">
        <path
          d="M3 0h130a3 3 0 013 3v6H0V3a3 3 0 013-3z"
          fill="#606C80"
          opacity=".2"
        />
        <circle fill="#FFF" opacity=".747" cx="5.5" cy="4.5" r="1.5" />
        <circle fill="#FFF" opacity=".747" cx="11.5" cy="4.5" r="1.5" />
        <circle fill="#FFF" opacity=".747" cx="17.5" cy="4.5" r="1.5" />
      </g>
      <g transform="translate(23 30)">
        <rect fill="#FFF" width="122" height="78" rx="2" />
        <use
          stroke="#DFE5F0"
          mask="url(#f)"
          stroke-width="2"
          fill-opacity=".25"
          fill="#E5EAEE"
          stroke-dasharray="2"
          xlink:href="#a"
        />
        <use
          stroke="#DFE5F0"
          mask="url(#g)"
          stroke-width="2"
          fill-opacity=".25"
          fill="#E5EAEE"
          stroke-dasharray="2"
          xlink:href="#b"
        />
        <rect
          fill="#CFD8E5"
          fill-rule="nonzero"
          opacity=".5"
          x="8"
          y="39.5"
          width="12"
          height="4"
          rx="1"
        />
        <rect
          fill="#06F"
          fill-rule="nonzero"
          x="24"
          y="62"
          width="24"
          height="10"
          rx="1"
        />
        <rect
          fill="#E7EBF2"
          fill-rule="nonzero"
          x="50"
          y="62"
          width="24"
          height="10"
          rx="1"
        />
        <path
          stroke="#606C80"
          opacity=".072"
          stroke-linecap="square"
          d="M8 56h106"
        />
        <rect
          fill="#CFD8E5"
          fill-rule="nonzero"
          opacity=".5"
          x="8"
          y="24"
          width="12"
          height="4"
          rx="1"
        />
        <use
          stroke="#DFE5F0"
          mask="url(#h)"
          stroke-width="2"
          fill-opacity=".25"
          fill="#E5EAEE"
          stroke-dasharray="2"
          xlink:href="#c"
        />
        <rect fill="#89D3EE" x="28" y="10" width="8" height="4" rx="1" />
        <g transform="translate(65 9.5)">
          <mask id="j" fill="#fff"><use xlink:href="#i" /></mask>
          <use fill="#000" xlink:href="#i" />
          <g mask="url(#j)" fill="#202D40"><path d="M0 0h5v5H0z" /></g>
        </g>
        <rect
          fill="#CFD8E5"
          fill-rule="nonzero"
          opacity=".5"
          x="8"
          y="10.5"
          width="12"
          height="4"
          rx="1"
        />
      </g>
      <g transform="translate(122 25)">
        <use fill="#000" filter="url(#k)" xlink:href="#l" />
        <use fill="#FFF" xlink:href="#l" />
        <rect
          fill="#F5A623"
          opacity=".7"
          x="4"
          y="5"
          width="28"
          height="2"
          rx="1"
        />
        <rect
          fill="#F5A623"
          opacity=".401"
          x="4"
          y="9"
          width="20"
          height="2"
          rx="1"
        />
        <g transform="translate(4 16)">
          <rect fill="#51C48A" width="3" height="3" rx="1" />
          <rect
            fill="#DDE2F6"
            opacity=".5"
            x="5"
            y="1"
            width="15"
            height="1"
            rx=".5"
          />
          <rect
            fill="#DDE2F6"
            opacity=".5"
            x="25"
            y=".5"
            width="2"
            height="2"
            rx="1"
          />
          <rect
            fill="#DDE2F6"
            opacity=".5"
            x="25"
            y="6.5"
            width="2"
            height="2"
            rx="1"
          />
          <rect
            fill="#DDE2F6"
            opacity=".5"
            x="25"
            y="12.5"
            width="2"
            height="2"
            rx="1"
          />
          <rect
            fill="#DDE2F6"
            opacity=".5"
            x="5"
            y="7"
            width="15"
            height="1"
            rx=".5"
          />
          <rect
            fill="#DDE2F6"
            opacity=".5"
            x="5"
            y="13"
            width="15"
            height="1"
            rx=".5"
          />
          <rect fill="#F8C065" y="6" width="3" height="3" rx="1" />
          <rect fill="#5881FC" y="12" width="3" height="3" rx="1" />
        </g>
      </g>
    </g>
  </svg>
</template>
<script></script>
