##npm packages
- Laravel mix - https://github.com/JeffreyWay/laravel-mix
- cross-env - For windows users
- eslint

##editor config
	- sublime
		```
		{
		    "user": {
		        "debug": true,
		        "delay": 0.25,
		        "error_color": "D02000",
		        "gutter_theme": "Packages/SublimeLinter/gutter-themes/Default/Default.gutter-theme",
		        "gutter_theme_excludes": [],
		        "lint_mode": "background",
		        "linters": {
		            "eslint": {
		                "@disable": false,
		                "args": [
		                    "--stdin-filename",
		                    "__RELATIVE_TO_FOLDER__"
		                ],
		                "excludes": [
		                    "dist/*",
		                    "node_modules/*",
		                    "**/node_modules/**",
		                    "**/vendor/**"
		                ]
		            },
		            "jshint": {
		                "@disable": true
		            }
		        },
		        "mark_style": "outline",
		        "no_column_highlights_line": false,
		        "passive_warnings": false,
		        "paths": {
		            "linux": [],
		            "osx": [],
		            "windows": [
		                "c:/Program Files/nodejs"
		            ]
		        },
		        "python_paths": {
		            "linux": [],
		            "osx": [],
		            "windows": []
		        },
		        "rc_search_limit": 3,
		        "shell_timeout": 10,
		        "show_errors_on_save": true,
		        "show_marks_in_minimap": true,
		        "syntax_map": {
		            "html (django)": "html",
		            "html (rails)": "html",
		            "html 5": "html",
		            "javascript (babel)": "javascript",
		            "magicpython": "python",
		            "php": "html",
		            "python django": "python",
		            "pythonimproved": "python"
		        },
		        "tooltip_fontsize": "1rem",
		        "tooltip_theme": "Packages/SublimeLinter/tooltip-themes/Default/Default.tooltip-theme",
		        "tooltip_theme_excludes": [],
		        "tooltips": true,
		        "warning_color": "DDB700",
		        "wrap_find": true
		    }
		}
		```