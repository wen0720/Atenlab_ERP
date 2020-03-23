<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="board">
        <div class="board__content">
          <div id="taskStats__chart">
            圖表
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="board">
        <div class="board__content">
            <div id="taskStats__chart">
              圖表
            </div>
        </div>
      </div>
    </div>
    <div class="col">
      <h2>業務部門專案</h2>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">人力分配</th>
              <th scope="col">執行中 案數/待辦</th>
              <th scope="col">延遲 案數/待辦</th>
              <th scope="col">重要 案數/待辦</th>
              <th scope="col">未完成 案數/待辦</th>
              <th scope="col">更新比</th>
              <th scope="col">獎金累積</th>
            </tr>
          </thead>
        </table>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
  .board{
    width: 100%;
    background: #fff;
    border-radius: 5px;
    margin: 20px 0;
    overflow: hidden;
    @include box-shadow(0, 0, 8px, rgba(200,200,200,.3));
    &__title{
      color: #333;
      font-size: 1.5rem;
      padding: 10px;
      border-bottom: 1px solid #ddd;
      position: relative;
      &:after{
        content: '';
        position: absolute;
        width: 100%;
        bottom: -2px;
        height: 1px;
        background: #eaeaea;
        left: 0;
      }
    }
    &__content{
      padding: 10px;
    }
  }
  .welcome{
    font-size: 1.5rem;
    padding: 30px 20px;
    color: #fff;
    background: linear-gradient(45deg,#048ed1,#3db6f1);
    text-align: center;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    &__icon{
      width: 60px;
      height: 60px;
      margin: 0 auto 14px auto;
      background: rgba(255, 255, 255, .2);
      border-radius: 50%;
      padding: 14px;
      margin-bottom: 14px;
    }
    &__account{
      font-size: 2rem;
      margin-bottom: 8px
    }
    &__description{
      font-size: 1.2rem;
      opacity: .7;
    }
  }
</style>
