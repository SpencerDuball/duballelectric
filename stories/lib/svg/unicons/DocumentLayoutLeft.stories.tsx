import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DocumentLayoutLeft, DocumentLayoutLeftPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/DocumentLayoutLeft",
  component: DocumentLayoutLeft,
} as ComponentMeta<typeof DocumentLayoutLeft>;

const Template: ComponentStory<typeof DocumentLayoutLeft> = (
  args: DocumentLayoutLeftPropsI
) => (
  <x.div display="flex" gap="20px">
    <DocumentLayoutLeft {...args} />
    <DocumentLayoutLeft {...args} fill="red.500" />
    <DocumentLayoutLeft {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
