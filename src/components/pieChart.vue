<template lang="pug">
  .progress-pie-chart(:data-percent="chartPercent")
    .ppc-progress
      .ppc-progress-fill
    .ppc-percents
      .ppc-percents-wrapper
        span.ppc-percents-span
</template>
<script>
export default {
  name: 'pieChart',
  props: {
    chartPercent: String
  },
  data: function () {
    return {

    }
  },
  mounted () {
    this.chartRing()
  },
  methods: {
    chartRing: function () {
      const ppc = document.querySelectorAll('.progress-pie-chart')
      ppc.forEach(function(item){
        let percent = parseInt(item.dataset.percent)
        let deg = 360 * percent / 100
        if ( percent > 50 ) {
          item.classList.add('gt-50')
        }
        item.querySelector('.ppc-progress-fill').style.transform = "rotate(" + deg + "deg)"
        item.querySelector('.ppc-percents-span').innerHTML = (percent+'%')
      })
    }
  }
}
</script>
<style lang="scss">
@mixin circle($size) {
  content: "";
  position: absolute;
  border-radius: 50%;
  left: calc(50% - #{$size/2});
  top: calc(50% - #{$size/2});
  width: $size;
  height: $size;
}

$ring-color:#67c23a;
$back-ring:rgba(#111,.8);
$size: 80px;

.progress-pie-chart {
  width: $size;
  height: $size;
  border-radius: 50%;
  background-color: rgba(#00ff00,.3);
  position: relative;
  &.gt-50 {
    background-color: $ring-color;
  }
}
.ppc-progress {
  @include circle($size);
  clip: rect(0, $size, $size, #{$size/2});
  .ppc-progress-fill {
    @include circle($size);
    clip: rect(0, #{$size/2}, $size, 0);
    background: $ring-color;
    transform: rotate(60deg);
  }
  .gt-50 & {
    clip: rect(0, #{$size/2}, $size, 0);
    .ppc-progress-fill {
      clip: rect(0, $size, $size, #{$size/2});
       background-color: $back-ring;
    }
  }
}
.ppc-percents {
  @include circle(#{$size/1.15});
  background: #000;
  text-align: center;
  display: table;
  span {
    display: block;
    font-size: 1em;
    font-weight: bold;
    color: $ring-color;
    line-height: 60px;
  }
}
.pcc-percents-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.progress-pie-chart {
  margin: 10px 0;
}
</style>
