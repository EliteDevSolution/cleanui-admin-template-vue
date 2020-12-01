<template>
  <div>
    <div class="d-flex flex-wrap">
      <div class="mr-auto pr-3 my-2">
        <i class="fe fe-book font-size-21 mr-2"></i>
        <div class="text-nowrap d-inline-block font-size-18 text-dark">
          <a class="font-size-18 text-blue" href="javascript: void(0);">umijs</a> /
          <a class="font-size-18 text-blue" href="javascript: void(0);">umi</a>
        </div>
      </div>
      <div class="d-flex flex-wrap font-size-16">
        <div class="mr-3 my-2 text-nowrap">
          <i class="fe fe-user-check font-size-21 mr-1"></i>
          Watch
          <strong class="text-dark font-size-18 ml-1">6,870</strong>
        </div>
        <div class="mr-3 my-2 text-nowrap">
          <i class="fe fe-star font-size-21 mr-1"></i>
          Star
          <strong class="text-dark font-size-18 ml-1">16,356</strong>
        </div>
        <div class="mr-3 my-2 text-nowrap">
          <i class="fe fe-copy font-size-21 mr-1"></i>
          Fork
          <strong class="text-dark font-size-18 ml-1">569</strong>
        </div>
      </div>
    </div>
    <a-tabs defaultActiveKey="1" class="kit-tabs-bordered mb-2">
      <a-tab-pane tab="Code" key="1" />
      <a-tab-pane key="2">
        <span slot="tab">
          Issues
          <strong>(85)</strong>
        </span>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">
          Pull requests
          <strong>(4)</strong>
        </span>
      </a-tab-pane>
      <a-tab-pane tab="Sequrity" key="4" />
      <a-tab-pane tab="Insights" key="5" />
    </a-tabs>
    <div class="d-flex flex-xs-wrap border-bottom pb-4 mb-4">
      <div class="mr-auto pr-3">
        <div
          class="text-dark font-size-24 font-weight-bold mb-2"
        >[Feature Request] How to enable custom font that comes from svg #2460</div>
        <div class="mb-3">
          <span class="mr-3 text-uppercase badge badge-success">Open</span>
          <a class="font-weight-bold" href="javascript: void(0);">zxs2162</a>
          wrote this issue 12 days ago · 0 comments
        </div>
      </div>
      <a class="btn btn-success align-self-start text-nowrap" href="javascript: void(0);">New Issue</a>
    </div>
    <div class="row">
      <div class="col-lg-9">
        <div class="d-flex align-items-start mb-3">
          <a
            href="javascript: void(0);"
            class="kit__utils__avatar kit__utils__avatar--size50 mr-3 flex-shrink-0"
          >
            <img src="resources/images/avatars/5.jpg" alt="Mary Stanform" />
          </a>
          <div class="card flex-grow-1">
            <div class="card-header">
              <a class="font-weight-bold" href="javascript: void(0);">zxs2162</a> wrote this issue
              12 days ago · 0 comments
            </div>
            <div class="card-body">
              <h3>Description</h3>
              <p>
                Added child elements to the active text editor lose their scrollTop property when
                they are scrolled out of view.
              </p>
              <p>
                Hydrogen a popular atom package adds a React Component inline to the text editor to
                view results from external code execution through jupyter kernels.
              </p>
              <p>
                This React Component contains a standard div element (not an immediate child but
                down the sub tree) that if their is enough output can scroll.
              </p>
              <p>
                If you scroll inside of the element and then scroll down the text editor for it to
                fall out of view and be temporarily removed from the DOM. If you scroll back up that
                scroll position inside the element is lost.
              </p>
              <h3>Steps to Reproduce</h3>
              <ol>
                <li>Have hydrogen active and setup properly</li>
                <li>
                  Use
                  <code>Run Cell</code> command from hydrogen on the code below with about 50
                  extra new lines
                </li>
              </ol>
              <pre><code>for i in range(1000): print(i)</code></pre>
              <ol start="3">
                <li>Scroll down the editor</li>
                <li>Scroll back up the editor</li>
              </ol>
              <p>
                <strong>Expected behavior:</strong> Everything to look the same
              </p>
              <p>
                <strong>Actual behavior:</strong> Scroll top of the result view has been set to 0
                upon removal and adding back to the active DOM
              </p>
              <p>
                <strong>Reproduces how often:</strong> 100% of the time
              </p>
              <h3>Versions</h3>
              <p>
                You can get this information from copy and pasting the output of
                <code>atom --version</code> and
                <code>apm --version</code> from the command line.
                Also, please include the OS and what version of the OS you're running.
              </p>
              <p>
                Atom : 1.37.0
                <br />Electron: 2.0.18
                <br />Chrome : 61.0.3163.100
                <br />Node : 8.9.3
              </p>
              <h3>Additional Information</h3>
              <p>
                This isnt platform specific either, and I don't believe its a hydrogen problem.
                <br />I believe this is a problem with how etch processes the render of React Components
                or how it stores html nodes when removing them. But I understand its more complex
                than that.
              </p>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-start mb-3">
          <a
            href="javascript: void(0);"
            class="kit__utils__avatar kit__utils__avatar--size50 mr-3 flex-shrink-0"
          >
            <img src="resources/images/avatars/5.jpg" alt="Mary Stanform" />
          </a>
          <div class="card flex-grow-1">
            <a-tabs defaultActiveKey="1" class="kit-tabs-bordered">
              <a-tab-pane tab="Write" key="1" />
              <a-tab-pane tab="Preview" key="2" />
            </a-tabs>
            <div class="card-body py-2">
              <div class="height-250 mb-3">
                <quill-editor style="height: 200px;"></quill-editor>
              </div>
              <a
                href="javascript: void(0);"
                class="btn btn-success btn-with-addon text-nowrap my-3"
              >
                <span class="btn-addon">
                  <i class="btn-addon-icon fe fe-plus-circle"></i>
                </span>
                Add Comment
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="py-4 border-bottom">
          <div class="font-weight-bold mb-2">Assignees</div>
          <div>No one assigned</div>
        </div>
        <div class="py-4 border-bottom">
          <div class="font-weight-bold mb-2">Labels</div>
          <div>None yet</div>
        </div>
        <div class="py-4 border-bottom">
          <div class="font-weight-bold mb-2">Projects</div>
          <div>None yet</div>
        </div>
        <div class="py-4 border-bottom">
          <div class="font-weight-bold mb-2">Milestone</div>
          <div>No milestone</div>
        </div>
        <div class="py-4 border-bottom">
          <div class="font-weight-bold mb-2">Notifications</div>
          <a href="javascript: void(0);" class="btn btn-light text-blue mb-2">Subscribe</a>
          <div>You’re not receiving notifications from this thread.</div>
        </div>
        <div class="py-4">
          <div class="font-weight-bold mb-2">4 participants</div>
          <div class="kit__utils__avatarGroup mb-3">
            <div class="kit__utils__avatar kit__utils__avatar--size46">
              <img src="resources/images/avatars/1.jpg" alt="User 1" />
            </div>
            <div class="kit__utils__avatar kit__utils__avatar--size46">
              <img src="resources/images/avatars/2.jpg" alt="User 2" />
            </div>
            <div class="kit__utils__avatar kit__utils__avatar--size46">
              <img src="resources/images/avatars/3.jpg" alt="User 3" />
            </div>
            <div class="kit__utils__avatar kit__utils__avatar--size46">
              <img src="resources/images/avatars/4.jpg" alt="User 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor,
  },
}
</script>
