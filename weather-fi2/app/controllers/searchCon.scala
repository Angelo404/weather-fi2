package controllers

import controllers.Application._
import play.api.mvc.{Action, Controller}

/**
 * Created by Euaggelos on 10-Nov-14.
 */
object searchCon extends Controller{

  def onSearch = Action{
    Ok(views.html.search("Search"))
  }

}
