package controllers

import controllers.Application._
import play.api.mvc.{Action, Controller}

object aboutCon extends Controller{

  def onAbout = Action{
    Ok(views.html.about("About"))
  }

}
