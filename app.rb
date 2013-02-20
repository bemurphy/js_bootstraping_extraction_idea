require "sinatra"
require "json"

helpers do
  def js_init_data_tag(id, data)
    # FIXME data here would need to be escaped
    tag = <<-EOS
      <script id="#{id}" class="js-bootstrap" type="application/json">
        #{data}
      </script>
    EOS

    tag
  end
end

get "/" do
  erb :index
end
