import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Gitlab, GitlabPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Gitlab",
  component: Gitlab,
} as ComponentMeta<typeof Gitlab>;

const Template: ComponentStory<typeof Gitlab> = (args: GitlabPropsI) => (
  <x.div display="flex" gap="20px">
    <Gitlab {...args} />
    <Gitlab {...args} fill="red.500" />
    <Gitlab {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
