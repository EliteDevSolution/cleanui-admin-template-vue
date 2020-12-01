<template>
  <div>
    <div class="kit__utils__heading">
      <h5>
        <span class="mr-3">Grid</span>
        <a
          href="https://getbootstrap.com/docs/4.3/layout/grid/"
          target="_blank"
          class="btn btn-sm btn-light"
        >
          Official Documentation
          <i class="fe fe-corner-right-up"></i>
        </a>
      </h5>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12 mb-5">
            <h5 class="mb-4">
              <strong>How it works</strong>
            </h5>
            <div class="row text-center">
              <div class="col-sm">
                <div class="mb-4 px-3 py-2 bg-light">One of three columns</div>
              </div>
              <div class="col-sm">
                <div class="mb-4 px-3 py-2 bg-light">One of three columns</div>
              </div>
              <div class="col-sm">
                <div class="mb-4 px-3 py-2 bg-light">One of three columns</div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mb-5">
            <h5 class="mb-4">
              <strong>Grid options</strong>
            </h5>
            <table class="table table-bordered table-striped">
              <thead>
              <tr>
                <th></th>
                <th class="text-center">
                  Extra small<br />
                  <small>&lt;576px</small>
                </th>
                <th class="text-center">
                  Small<br />
                  <small>≥576px</small>
                </th>
                <th class="text-center">
                  Medium<br />
                  <small>≥768px</small>
                </th>
                <th class="text-center">
                  Large<br />
                  <small>≥992px</small>
                </th>
                <th class="text-center">
                  Extra large<br />
                  <small>≥1200px</small>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th class="text-nowrap" scope="row">Max container width</th>
                <td>None (auto)</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
              </tr>
              <tr>
                <th class="text-nowrap" scope="row">Class prefix</th>
                <td><code>.col-</code></td>
                <td><code>.col-sm-</code></td>
                <td><code>.col-md-</code></td>
                <td><code>.col-lg-</code></td>
                <td><code>.col-xl-</code></td>
              </tr>
              <tr>
                <th class="text-nowrap" scope="row"># of columns</th>
                <td colspan="5">12</td>
              </tr>
              <tr>
                <th class="text-nowrap" scope="row">Gutter width</th>
                <td colspan="5">30px (15px on each side of a column)</td>
              </tr>
              <tr>
                <th class="text-nowrap" scope="row">Nestable</th>
                <td colspan="5">Yes</td>
              </tr>
              <tr>
                <th class="text-nowrap" scope="row">Column ordering</th>
                <td colspan="5">Yes</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="col-lg-12 mb-5">
            <h5 class="mb-4">
              <strong>Stacked-to-Horizontal</strong>
            </h5>
            <div class="row">
              <div class="col-md-8">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-8</div>
              </div>
              <div class="col-md-4">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-4</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-4</div>
              </div>
              <div class="col-md-4">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-4</div>
              </div>
              <div class="col-md-4">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-4</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-6</div>
              </div>
              <div class="col-md-6">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-6</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
              <div class="col-md-1">
                <div class="mb-4 px-3 py-2 bg-light">.col-md-1</div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mb-5">
            <h5 class="mb-4">
              <strong>Desktop & Mobile</strong>
            </h5>
            <div class="row">
              <div class="col-xs-12 col-md-8">
                <div class="mb-4 px-3 py-2 bg-light">.col-xs-12 .col-md-8</div>
              </div>
              <div class="col-xs-6 col-md-4">
                <div class="mb-4 px-3 py-2 bg-light">col-xs-6 .col-md-4</div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-6 col-md-4">
                <div class="mb-4 px-3 py-2 bg-light">.col-xs-6 .col-md-4</div>
              </div>
              <div class="col-xs-6 col-md-4">
                <div class="mb-4 px-3 py-2 bg-light">.col-xs-6 .col-md-4</div>
              </div>
              <div class="col-xs-6 col-md-4">
                <div class="mb-4 px-3 py-2 bg-light">.col-xs-6 .col-md-4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
