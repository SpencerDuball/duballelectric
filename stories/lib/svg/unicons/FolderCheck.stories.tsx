import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FolderCheck, FolderCheckPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FolderCheck",
  component: FolderCheck,
} as ComponentMeta<typeof FolderCheck>;

const Template: ComponentStory<typeof FolderCheck> = (
  args: FolderCheckPropsI
) => (
  <x.div display="flex" gap="20px">
    <FolderCheck {...args} />
    <FolderCheck {...args} fill="red.500" />
    <FolderCheck {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
