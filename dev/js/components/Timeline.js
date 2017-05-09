import React from 'react';

export class TimeLine extends React.Component {

	render() {
		return (
				<div className="container">

					<div className="page-header">
						<h2>Timeline <small>using Bootstrap's <code>.panel</code>.</small></h2>
					</div>

					<div className="timeline">

						<div className="line text-muted"></div>
						<div className="separator text-muted">
							<time>26. 3. 2015</time>
						</div>

						<article className="panel panel-info">
							<div className="panel-heading icon">
								<i className="glyphicon glyphicon-info-sign"></i>
							</div>
							<div className="panel-heading">
								<h2 className="panel-title">New content added</h2>
							</div>
							<div className="panel-body">
								Some new content has been added.
							</div>
							<div className="panel-footer">
								<small>Footer is also supported!</small>
							</div>
						</article>

						<div className="separator text-muted">
							<time>25. 3. 2015</time>
						</div>

						<article className="panel panel-success">
							<div className="panel-heading icon">
								<i className="glyphicon glyphicon-plus"></i>
							</div>
							<div className="panel-heading">
								<h2 className="panel-title">New content added</h2>
							</div>
							<div className="panel-body">
								Anything you can do with <code>.panel</code>, can be done in timeline too!
							</div>
							<ul className="list-group">
								<li className="list-group-item">Like</li>
								<li className="list-group-item">list</li>
								<li className="list-group-item">groups</li>
								<li className="list-group-item">and</li>
								<li className="list-group-item">tables</li>
							</ul>
						</article>

					</div>
				</div>
			);
	}
}


