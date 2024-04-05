from aws_cdk import (
    # Duration,
    Stack,
    # aws_sqs as sqs,
)
from constructs import Construct
from projenfunctionbundlingtest import SomeFunction

class CdkpythonStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # The code that defines your stack goes here
        SomeFunction(self, "SomeFunction")

        # example resource
        # queue = sqs.Queue(
        #     self, "CdkpythonQueue",
        #     visibility_timeout=Duration.seconds(300),
        # )
