import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CodeBranch, CodeBranchPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CodeBranch",
  component: CodeBranch,
} as ComponentMeta<typeof CodeBranch>;

const Template: ComponentStory<typeof CodeBranch> = (
  args: CodeBranchPropsI
) => (
  <x.div display="flex" gap="20px">
    <CodeBranch {...args} />
    <CodeBranch {...args} fill="red.500" />
    <CodeBranch {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
