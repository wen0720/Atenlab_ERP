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
      <h1 class="mb-4">業務部門專案</h1>
      <template>
        <el-table
          :data="tableData1"
          style="width: 100%"
          class="mb-5">
          <el-table-column
            prop="peopleDistribution"
            label="人力分配"
            width="200"
            align="center">
          </el-table-column>
          <el-table-column label="執行中" align="center">
            <el-table-column prop="progress" label="案數/待辦" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column label="延遲" align="center">
            <el-table-column prop="delay" label="案數/待辦" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column label="重要" align="center">
            <el-table-column prop="important" label="案數/待辦" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column label="未完成" align="center">
            <el-table-column prop="undone" label="案數/待辦" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column
            prop="updateRatio"
            label="更新比"
            align="center"
            width="150">
          </el-table-column>
          <el-table-column
            prop="bonusAccumulation"
            label="獎金累積"
            align="center"
            width="150">
          </el-table-column>
        </el-table>
      </template>
      <template>
        <el-table
          :data="tableData2"
          style="width: 100%">
          <el-table-column
            prop="peopleDistribution"
            label="人力分配"
            width="100"
            align="center">
          </el-table-column>
          <el-table-column label="Q1-即將訂購" align="center">
            <el-table-column label="案數/收入/毛利率" align="center">
              <el-table-column label="重疊/延遲/未完成" align="center">
                <template slot-scope="scope">
                    <div v-html="scope.row.q1Text"></div>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table-column>
          <el-table-column label="Q2-追蹤" align="center">
            <el-table-column label="案數/收入/毛利率" align="center">
              <el-table-column label="重疊/延遲/未完成" align="center">
                <template slot-scope="scope">
                    <div v-html="scope.row.q2Text"></div>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table-column>
          <el-table-column label="Q3-報價" align="center">
            <el-table-column label="案數/收入/毛利率" align="center">
              <el-table-column label="重疊/延遲/未完成" align="center">
                <template slot-scope="scope">
                    <div v-html="scope.row.q3Text"></div>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table-column>
          <el-table-column label="Q4-有消息" align="center">
            <el-table-column label="案數/收入/毛利率" align="center">
              <el-table-column label="重疊/延遲/未完成" align="center">
                <template slot-scope="scope">
                    <div v-html="scope.row.q4Text"></div>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table-column>
          <el-table-column label="Q5-訂購" align="center">
            <el-table-column label="案數/收入/毛利率" align="center">
              <el-table-column label="重疊/延遲/未完成" align="center">
                <template slot-scope="scope">
                    <div v-html="scope.row.q5Text"></div>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table-column>
          <el-table-column label="獎金" align="center" width="150">
            <el-table-column prop="bonusTotal" label="總額" align="center" width="80">
            </el-table-column>
            <el-table-column prop="NotYetReleased" label="尚未發放" align="center" width="80">
            </el-table-column>
            <el-table-column prop="released" label="已發放" align="center" width="80">
            </el-table-column>
          </el-table-column>
          <el-table-column
            prop="activity"
            label="活躍度"
            align="center"
            width="100">
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tableData1: [{
        peopleDistribution: '整體',
        progress: '5/10',
        delay: '5/10',
        important: '5/10',
        undone: '5/10',
        updateRatio: '30%',
        bonusAccumulation: '78'
      }],
      tableData2: [{
        peopleDistribution: '整體',
        q1Text: '3/500/30%' + '<br/>' + '*2/5/10',
        q2Text: '3/500/30%' + '<br/>' + '*2/5/10',
        q3Text: '3/500/30%' + '<br/>' + '*2/5/10',
        q4Text: '3/500/30%' + '<br/>' + '*2/5/10',
        q5Text: '3/500/30%' + '<br/>' + '*2/5/10',
        bonusTotal: '78',
        NotYetReleased: '8',
        released: '70',
        activity: '80'
      },
      {
        peopleDistribution: 'Vivian',
        q1Text: '3/500/30%' + '<br/>' + '*2/5/10',
        q2Text: '3/500/30%' + '<br/>' + '*2/5/10',
        q3Text: '3/500/30%' + '<br/>' + '*2/5/10',
        q4Text: '3/500/30%' + '<br/>' + '*2/5/10',
        q5Text: '3/500/30%' + '<br/>' + '*2/5/10',
        bonusTotal: '78',
        NotYetReleased: '8',
        released: '70',
        activity: '80'
      }]
    }
  },
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
