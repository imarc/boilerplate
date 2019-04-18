Background Video
================

In order to achieve an edge-to-edge/cover effect for our video, we
`position: absolute;` it within a parent container. We give it a
faux-height via a padding value on this parent’s `::before` pseudo
element. If you aim to have a 16:9 aspect ratio, this padding value would be
56.25% (9 / 16). Do not forget to add a `video` placeholder image
that matches your desired aspect ratio. Use both .webm and .mp4 video file
formats for the widest browser support.

### Emmet Shorthand
```
.backgroundvideo>(.mold>div>h1+p)+video>source[src]
```
